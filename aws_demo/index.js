const express = require("express");
require("dotenv").config();
const {
  S3Client,
  PutObjectCommand,
  CreateBucketCommand,
  DeleteObjectCommand,
  DeleteBucketCommand,
  paginateListObjectsV2,
  GetObjectCommand,
} = require("@aws-sdk/client-s3");

const app = express();

const s3 = new S3Client({
  region: precess.env.AWS_REGION,
  credentials: {
    accessKeyId: precess.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: precess.env.AWS_SECRET_ACCESS_KEY,
  },
});

app.listen(3000, () => {
  console.log("已運作在 http://localhost:3000");
});
