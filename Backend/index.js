import express from "express"
import listingRoutes from "./routes/listings.js"
import cors  from 'cors'
import bodyParser from "body-parser";
import multer from "multer"
import { v4 as uuidv4 } from 'uuid';
import postsRoutes from "./routes/posts.js"
import usersRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js"
import cookieParser from "cookie-parser"


const app = express()



app.use(cors())
app.use(bodyParser.json());
app.use(cookieParser());


app.use("/api/listings",listingRoutes)

app.use("/api/auth",authRoutes)
app.use("/api/posts",postsRoutes)
app.use("/api/users",usersRoutes)




const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../client/public/upload')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = uuidv4().slice(0, 8);
      cb(null, uniqueSuffix+file.originalname)
    }
})  
const upload = multer({ storage })

app.post('/api/upload', upload.array('file', 12), function (req, res, next) {
  const files = req.files
  const fileUrls = files.map(file => {
      return { fileName: file.filename, fileUrl: `/upload/${file.filename}` };
  });

  res.status(200).json(fileUrls);
})  

app.listen(8800,() => {
    console.log("connected to backend")
})


