import { ExternalLink, ArrowLeft } from "lucide-react";
import { Button } from "@mui/material";
import { Link } from "react-router";

export default function LearningMaterials() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-black text-white py-6 px-6">
        <div className="max-w-6xl mx-auto">
          <Link to="/">
            <Button
              variant="outlined"
              className="border-2 border-white text-white hover:bg-white/10"
              startIcon={<ArrowLeft />}
            >
              Back to Home
            </Button>
          </Link>
        </div>
      </div>

      {/* Learning Materials */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl text-center mb-6 text-black">
            Learning Materials
          </h1>
          <div className="flex justify-center mb-16">
            <a
              href="https://github.com/aiclub-sdsu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-red-600 hover:text-red-800 transition-colors text-lg"
            >
              <ExternalLink className="w-5 h-5" />
              Github Link: https://github.com/aiclub-sdsu
            </a>
          </div>

          {/* Spring 2026 */}
          <div className="mb-12">
            <h2 className="text-3xl mb-6 text-red-600">
              Spring 2026
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <a
                  href="https://colab.research.google.com/drive/1o4H4f1bUmycNW5VJd7G0bk1AKZgnSkPp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between"
                >
                  <p className="text-lg text-black">
                    Computer Vision: YOLO Object Detection
                  </p>
                  <ExternalLink className="w-5 h-5 text-red-600" />
                </a>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <a
                  href="https://docs.google.com/document/d/1ruPmUelrq6QfW8sJccwJJP-9IKB6-DicqjWiJ5sl7YQ/edit?tab=t.0#heading=h.3a92eqr0duze"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between"
                >
                  <p className="text-lg text-black">
                    Portfolio Website with AI / Prompt
                    Engineering
                  </p>
                  <ExternalLink className="w-5 h-5 text-red-600" />
                </a>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <a
                  href="https://github.com/jayM-11/Agentic-AI-Workshop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between"
                >
                  <p className="text-lg text-black">
                    LLMs and Agentic AI (LangGraph + LangSmith +
                    Ollama demo, Claude Code & Skills)
                  </p>
                  <ExternalLink className="w-5 h-5 text-red-600" />
                </a>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <a
                  href="https://github.com/aiclub-sdsu/workshops/tree/main/Spring26/RecSystems"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between"
                >
                  <p className="text-lg text-black">
                    Recommendation Systems (MovieLens dataset,
                    content-based + collaborative filtering,
                    SVD, cosine similarity, TF-IDF)
                  </p>
                  <ExternalLink className="w-5 h-5 text-red-600" />
                </a>
              </div>
            </div>
          </div>

          {/* Fall 2025 */}
          <div className="mb-12">
            <h2 className="text-3xl mb-6 text-red-600">
              Fall 2025
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <a
                  href="https://colab.research.google.com/drive/1kWQe37LYqNYmdrFbbnsJwVw1-7-mlWyo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between"
                >
                  <p className="text-lg text-black">
                    Intro to Python and ML
                  </p>
                  <ExternalLink className="w-5 h-5 text-red-600" />
                </a>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <div className="flex items-center justify-between">
                  <p className="text-lg text-black">
                    NLP and LLMs / MCP
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="https://drive.google.com/file/d/1OsCFaY8Gj9i5qWI1tRVlwkZKmdSg44Qz/view"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-red-600 hover:text-red-800"
                    >
                      Slides{" "}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href="https://github.com/joshua-zingale/mcp-introduction-workshop"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-red-600 hover:text-red-800"
                    >
                      GitHub{" "}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <a
                  href="https://colab.research.google.com/drive/1SFsSjDEqvEUT6GRgKcvrVkBf8YfkHYSQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between"
                >
                  <p className="text-lg text-black">
                    Multimodal and Audio
                  </p>
                  <ExternalLink className="w-5 h-5 text-red-600" />
                </a>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <a
                  href="https://drive.google.com/file/d/17lQsJTXc7SbAXi4jTulQurvtLNWed-hO/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between"
                >
                  <p className="text-lg text-black">
                    Prof. Althaf Speaker (SDSU Civil &
                    Structural Engineering + AI)
                  </p>
                  <ExternalLink className="w-5 h-5 text-red-600" />
                </a>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <a href="https://github.com/aiclub-sdsu/workshops/tree/main/Fall25/HandTrackingCV" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between">
                  <p className="text-lg text-black">Hand Tracking with OpenCV 2.0</p>
                  <ExternalLink className="w-5 h-5 text-red-600" />
                </a>
              </div>
            </div>
          </div>

          {/* Spring 2025 */}
          <div className="mb-12">
            <h2 className="text-3xl mb-6 text-red-600">
              Spring 2025
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <a
                  href="https://drive.google.com/file/d/1ESRr9H-mux05h0yQLOdq3r65doMKaVrQ/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between"
                >
                  <p className="text-lg text-black">
                    K-Emotion Detection / Fine-Tuned BERT
                  </p>
                  <ExternalLink className="w-5 h-5 text-red-600" />
                </a>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <a
                  href="https://drive.google.com/file/d/1DDev3FQ4Zq45yrYSpnOF1wKLwz8zLbd2/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between"
                >
                  <p className="text-lg text-black">
                    Hand Tracking with OpenCV
                  </p>
                  <ExternalLink className="w-5 h-5 text-red-600" />
                </a>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <a
                  href="https://drive.google.com/file/d/1J1rCYy9i-1dpvwB-bW1SLJ0TTAQFjlCY/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between"
                >
                  <p className="text-lg text-black">
                    FIS FinTech Panel Presentation
                  </p>
                  <ExternalLink className="w-5 h-5 text-red-600" />
                </a>
              </div>
            </div>
          </div>

          {/* Spring 2024 */}
          <div className="mb-12">
            <h2 className="text-3xl mb-6 text-red-600">
              Spring 2024
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <a
                  href="https://colab.research.google.com/drive/1SHKPTt96Yx9BQF3JI0u4vUtrVgHBEQdB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between"
                >
                  <p className="text-lg text-black">
                    MNIST Data Loading
                  </p>
                  <ExternalLink className="w-5 h-5 text-red-600" />
                </a>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <a
                  href="https://drive.google.com/file/d/1au5nD3o8-rwpQVj8X1jWZrGAuR4fSddV/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between"
                >
                  <p className="text-lg text-black">
                    Language Model Watermarking
                  </p>
                  <ExternalLink className="w-5 h-5 text-red-600" />
                </a>
              </div>
            </div>
          </div>

          {/* Spring 2021 */}
          <div className="mb-12">
            <h2 className="text-3xl mb-6 text-red-600">
              Spring 2021
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <a
                  href="https://www.youtube.com/watch?v=rIaw--EA91M"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between"
                >
                  <p className="text-lg text-black">
                    Python Refresher
                  </p>
                  <ExternalLink className="w-5 h-5 text-red-600" />
                </a>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <a
                  href="https://www.youtube.com/watch?v=7jLAWt7nafI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between"
                >
                  <p className="text-lg text-black">
                    Object Detection with YOLO
                  </p>
                  <ExternalLink className="w-5 h-5 text-red-600" />
                </a>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <a
                  href="https://www.youtube.com/watch?v=yufYHT4XCps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between"
                >
                  <p className="text-lg text-black">
                    Object Tracking with YOLO
                  </p>
                  <ExternalLink className="w-5 h-5 text-red-600" />
                </a>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <a
                  href="https://www.youtube.com/watch?v=niJAV4Ns1mo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between"
                >
                  <p className="text-lg text-black">
                    AI-A-THON
                  </p>
                  <ExternalLink className="w-5 h-5 text-red-600" />
                </a>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <a
                  href="https://www.youtube.com/watch?v=MnuOyeMUt80"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between"
                >
                  <p className="text-lg text-black">
                    Neural Networks and Tensorflow
                  </p>
                  <ExternalLink className="w-5 h-5 text-red-600" />
                </a>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <a
                  href="https://www.youtube.com/watch?v=kT5OexOTcKM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between"
                >
                  <p className="text-lg text-black">
                    Convolutional Neural Networks
                  </p>
                  <ExternalLink className="w-5 h-5 text-red-600" />
                </a>
              </div>
            </div>
          </div>

          {/* Fall 2020 */}
          <div className="mb-12">
            <h2 className="text-3xl mb-6 text-red-600">
              Fall 2020
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <a
                  href="https://www.youtube.com/watch?v=jXLiFqFxmO4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between"
                >
                  <p className="text-lg text-black">
                    Python Beginner Workshop
                  </p>
                  <ExternalLink className="w-5 h-5 text-red-600" />
                </a>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <a
                  href="https://www.youtube.com/watch?v=xy09XNUykho"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between"
                >
                  <p className="text-lg text-black">
                    Python Advanced Workshop
                  </p>
                  <ExternalLink className="w-5 h-5 text-red-600" />
                </a>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <a
                  href="https://www.youtube.com/watch?v=CMwgQGYsir0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between"
                >
                  <p className="text-lg text-black">
                    Data Cleaning (Data Science pt. 1)
                  </p>
                  <ExternalLink className="w-5 h-5 text-red-600" />
                </a>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <a
                  href="https://www.youtube.com/watch?v=v5CKoMnwSGg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between"
                >
                  <p className="text-lg text-black">
                    Exploratory Data Analysis (Data Science pt.
                    2)
                  </p>
                  <ExternalLink className="w-5 h-5 text-red-600" />
                </a>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <a
                  href="https://www.youtube.com/watch?v=2Jk1gJZ1lBc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between"
                >
                  <p className="text-lg text-black">
                    Model Building (Data Science pt. 3)
                  </p>
                  <ExternalLink className="w-5 h-5 text-red-600" />
                </a>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <a
                  href="https://www.youtube.com/watch?v=n7pdUtYcOuM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between"
                >
                  <p className="text-lg text-black">
                    Object Detection (Computer Vision pt. 1)
                  </p>
                  <ExternalLink className="w-5 h-5 text-red-600" />
                </a>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <a
                  href="https://www.youtube.com/watch?v=Ljh_cVrtTfw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between"
                >
                  <p className="text-lg text-black">
                    Air Draw (Computer Vision pt. 2)
                  </p>
                  <ExternalLink className="w-5 h-5 text-red-600" />
                </a>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <a
                  href="https://www.youtube.com/watch?v=cj40wMCOGgU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between"
                >
                  <p className="text-lg text-black">
                    Neural Networks (Computer Vision pt. 3)
                  </p>
                  <ExternalLink className="w-5 h-5 text-red-600" />
                </a>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <a
                  href="https://www.youtube.com/watch?v=H5TWY6W5BNg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between"
                >
                  <p className="text-lg text-black">
                    K-Means Clustering
                  </p>
                  <ExternalLink className="w-5 h-5 text-red-600" />
                </a>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <a
                  href="https://www.youtube.com/watch?v=n-Dlk18w9f8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between"
                >
                  <p className="text-lg text-black">
                    Convolutional Neural Networks
                  </p>
                  <ExternalLink className="w-5 h-5 text-red-600" />
                </a>
              </div>
            </div>
          </div>

          {/* Fall 2019 - Spring 2020 */}
          <div className="mb-12">
            <h2 className="text-3xl mb-6 text-red-600">
              Fall 2019 - Spring 2020
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <a
                  href="https://aiclub.sdsu.edu/index.php/home/tutorial/random-forests/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between"
                >
                  <p className="text-lg text-black">
                    Random Forest
                  </p>
                  <ExternalLink className="w-5 h-5 text-red-600" />
                </a>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <a
                  href="https://docs.google.com/presentation/d/1WAfZXlUqOpMiNwa-wZXcchbPbk2YWzQya8bLulkykLk/edit?slide=id.p#slide=id.p"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between"
                >
                  <p className="text-lg text-black">
                    Applied Computer Vision Presentation
                  </p>
                  <ExternalLink className="w-5 h-5 text-red-600" />
                </a>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <a
                  href="https://github.com/DarpanBeri/JupyterNotebookWorkshop18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between"
                >
                  <p className="text-lg text-black">
                    Jupyter Notebook Workshop
                  </p>
                  <ExternalLink className="w-5 h-5 text-red-600" />
                </a>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <a
                  href="https://aiclub.sdsu.edu/index.php/home/tutorial/linear-regression-and-logistic-regression/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between"
                >
                  <p className="text-lg text-black">
                    Logistic and Linear Regression Workshop
                  </p>
                  <ExternalLink className="w-5 h-5 text-red-600" />
                </a>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <a
                  href="https://aiclub.sdsu.edu/index.php/home/tutorial/k-means-clustering/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between"
                >
                  <p className="text-lg text-black">
                    K-Means Clustering Powerpoint
                  </p>
                  <ExternalLink className="w-5 h-5 text-red-600" />
                </a>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <a
                  href="https://docs.google.com/document/d/1w2_GCDesRupc8JyT5GkD-xtaCFR_VC10yNQ8M3dUju0/edit?tab=t.0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between"
                >
                  <p className="text-lg text-black">
                    Decision Tree Powerpoint
                  </p>
                  <ExternalLink className="w-5 h-5 text-red-600" />
                </a>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <a
                  href="https://aiclub.sdsu.edu/index.php/home/tutorial/support-vector-machine/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between"
                >
                  <p className="text-lg text-black">
                    Support Vector Machine Powerpoint
                  </p>
                  <ExternalLink className="w-5 h-5 text-red-600" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}