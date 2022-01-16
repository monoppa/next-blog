import * as admin from 'firebase-admin';
import to from 'await-to-js';
import initFirebaseAdmin from 'utils/initFirebaseAdmin';

const view = async (req, res) => {
  initFirebaseAdmin();

  const { slug } = req.query;

  if (!slug) {
    res.statusCode = 200;
    res.send('Missing slug');
  }

  const db = admin.firestore();
  const blogRef = db.collection('blog-posts').doc(slug);

  const [error, snapshot] = await to(blogRef.get());

  if (error) {
    // console.log('file: [slug].js - line 19 - error', error);
    res.statusCode = 500;
    res.send('Internal server error');
  }

  if (snapshot.exists) {
    const blog = snapshot.data();
    blogRef.update({ views: blog.views + 1 });
  } else {
    blogRef.set({ views: 1 });
  }

  res.statusCode = 200;
  res.send('Success');
};

export default view;
