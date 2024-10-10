export async function updateMockData(blogId, newComment) {
  try {
    const response = await fetch("/api/comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ blogId, comment: newComment }),
    });

    if (!response.ok) {
      throw new Error("Failed to update comment");
    }

    return await response.json();
  } catch (error) {
    console.error("Error updating comment:", error);
  }
}
