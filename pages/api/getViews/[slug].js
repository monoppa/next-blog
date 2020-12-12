import to from 'await-to-js';
import * as admin from 'firebase-admin';
import initFirebaseAdmin from 'utils/initFirebaseAdmin';

export default async (req, res) => {
  initFirebaseAdmin();

  const { slug } = req.query;

  if (!slug) {
    res.statusCode = 400;
    res.send('Missing blog slug');
  }

  const db = admin.firestore();
  const blogRef = db.collection('blog-posts').doc(slug);

  const [error, snapshot] = await to(blogRef.get());

  if (error) {
    console.log('file: [slug].js - line 19 - error', error);
    res.statusCode = 500;
    res.send('Internal server error');
  }

  if (snapshot.exists) {
    const blog = snapshot.data();

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ views: blog.views }));
    return;
  }

  res.statusCode = 400;
  res.send('Unhandled error');
};
