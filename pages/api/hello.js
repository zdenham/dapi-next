// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  console.log('THE BODY FROM A REQUEST: ', req.body);

  res.status(200).json({ success: true });
};
