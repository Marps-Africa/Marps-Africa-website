import express from "express";
import bodyParser from "body-parser";
import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(bodyParser.json());

app.post("/api/comment", (req, res) => {
  const { blogId, comment } = req.body;
  const mockDataPath = join(__dirname, "src", "mockData.json");

  try {
    // Read the current mock data
    const mockData = JSON.parse(readFileSync(mockDataPath, "utf8"));

    // Find the blog post and add the new comment
    const blogPost = mockData.find((post) => post.id === parseInt(blogId));
    if (blogPost) {
      if (!blogPost.comments) {
        blogPost.comments = [];
      }
      blogPost.comments.push({
        ...comment,
        date: new Date().toISOString(),
      });

      // Write the updated data back to the file
      writeFileSync(mockDataPath, JSON.stringify(mockData, null, 2));
      res.json({ success: true });
    } else {
      res.status(404).json({ success: false, message: "Blog post not found" });
    }
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// const PORT = process.env.PORT || 3001;
const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
