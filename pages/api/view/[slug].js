import * as admin from 'firebase-admin';
import to from 'await-to-js';

export default async (req, res) => {
  const firebasePrivateKey = process.env.FIREBASE_PRIVATE_KEY;

  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        // https://stackoverflow.com/a/41044630/1332513
        privateKey: firebasePrivateKey.replace(/\\n/g, '\n'),
      }),
      databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    });
  }

  console.log('admin.apps', admin.apps);

  const { slug } = req.query;
  console.log('slug', slug);

  if (!slug) {
    res.statusCode = 200;
    res.send('Missing slug');
  }

  const db = admin.firestore();
  const blogRef = db.collection('blog-posts').doc(slug);
  console.log('blogRef', blogRef);

  const [error, snapshot] = await to(blogRef.get());

  if (error) {
    res.statusCode = 500;
    res.send('Internal server error');
  }

  console.log('snapshot.exists', snapshot.exists);
  if (snapshot.exists) {
    const blog = snapshot.data();
    console.log('blog', blog);
    blogRef.update({ views: blog.views + 1 });
  } else {
    console.log('not found');
    blogRef.set({ views: 1 });
  }

  res.statusCode = 200;
  res.send('Success');
};
