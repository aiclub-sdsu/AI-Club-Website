import { ArrowLeft, ExternalLink, Star } from 'lucide-react';
import { Button } from '@mui/material';
import { Link } from 'react-router';

const pastProjects: { title: string; desc: string; semester: string; tag?: string; links?: { href: string; label: string }[] }[] = [
  { title: 'Regime Adaptive Market Intelligence System', semester: 'Spring 2026', desc: 'Detect stock market regimes (high/low volatility, trending/mean-reverting) using Hidden Markov Models, extract stable return factors per regime via PCA, and signal alpha decay when factor correlations drop below a threshold. Walk-forward validation used for evaluation.', tag: 'Quant Finance' },
  { title: 'Assignment Deadline Manager', semester: 'Spring 2026', desc: 'Agentic system that integrates with the Canvas LMS API to deliver smart, automated reminders based on assignment difficulty, time to completion, and student procrastination patterns. Uses LLMs for summarizing and semantic analysis.', tag: 'Agentic AI' },
  { title: 'AI Health Assistant', semester: 'Spring 2026', desc: 'An agent that takes in a patient health report and outputs a series of probable diagnoses. LLMs are used only for summarizing — inference is handled by trained models to avoid hallucination risks.', tag: 'Medical AI' },
  { title: 'Marketing Agent (Gradeflow)', semester: 'Spring 2026', desc: 'Turn a project into a stronger marketplace listing by generating better descriptions, cleaner metadata, and a marketing image plan.', tag: 'Agentic AI' },
  { title: 'Process Grader (Gradeflow)', semester: 'Spring 2026', desc: 'Build a lightweight event logger that captures workflow evidence and produces a simple "process summary" a teacher can review alongside the final work.', tag: 'Educational Tech' },
  { title: 'Standards Tagger (Gradeflow)', semester: 'Spring 2026', desc: 'Suggest standards tags from school project and assignment objectives and provide a short rationale for each suggestion so creators can review and approve quickly.', tag: 'Educational Tech' },
  { title: 'Blueprint Analyzer (Star Flooring)', semester: 'Spring 2026', desc: 'AI-powered pipeline to automate the process of looking through flooring blueprints so professionals can get exactly what they need faster.', tag: 'Computer Vision' },
  { title: 'Apple Product Sentiment Analyzer', semester: 'Fall 2025', desc: 'Full-stack sentiment analysis app that pulls Reddit reviews via PRAW and uses the Claude Sonnet API + ChatGPT-5-nano to rate product sentiment 1–10 across specific attributes. Frontend built in TypeScript + React with Material UI.', tag: 'NLP' },
  { title: 'YT Voice Recognition + Captions', semester: 'Fall 2025', desc: 'Extract audio from YouTube videos and build a speech-to-text model using OpenAI Whisper or Wav2Vec2, targeted at videos with poor or missing captions.', tag: 'Audio AI' },
  { title: 'Image Captioner', semester: 'Fall 2025', desc: 'Create an image captioning system that generates natural language descriptions for images (potentially doing some meme generation).', tag: 'Computer Vision' },
  { title: 'Bone Region Classification', semester: 'Fall 2025', desc: 'Train a computer vision model to detect anomalies or classify fractures in radiograph (X-ray) images, addressing the problem of poorly labeled hospital scans that slow down diagnosis.', tag: 'Medical AI' },
  { title: 'LLM Tutor', semester: 'Fall 2025', desc: 'Fine-tune or use retrieval techniques to turn an LLM into an expert tutor for a specific niche subject or topic.', tag: 'LLM' },
  { title: 'Noise Reduction', semester: 'Spring 2025', desc: 'AI model that separates clean speech from noisy backgrounds in audio recordings.' },
  { title: 'GeoGuessr Player', semester: 'Spring 2025', desc: 'Computer vision model that predicts geographic location (country/region) from street-level images.' },
  { title: 'Animal Recognition', semester: 'Spring 2025', desc: 'Image classification model that identifies animal species from photos.' },
  { title: 'Better Book Query', semester: 'Spring 2025', desc: 'RAG-based question-answering system that lets users ask natural language questions about book content. Led by Jay Mittal.' },
  { title: 'Brain Tumor Segmentation', semester: 'Fall 2024', desc: 'Deep learning model for segmenting brain tumors in medical imaging scans (MRI).' },
  { title: 'Sign-Language Translator', semester: 'Fall 2024', desc: 'Real-time sign language translation system.' },
  { title: 'Personal Text-to-Speech', semester: 'Fall 2024', desc: 'Custom text-to-speech system with personalized voice models.' },
  { title: 'Database-Specific Chatbot', semester: 'Fall 2024', desc: 'Chatbot designed to interact with specific databases and answer queries.' },
  { title: 'Word Connection Builder', semester: 'Spring 2024', desc: 'AI that finds and builds semantic connections between words — similar to word association puzzles.' },
  { title: 'Discord Chatbot for AI Club', semester: 'Spring 2024', desc: 'RAG-based chatbot integrated into the AI Club Discord server to answer questions and assist members.' },
  { title: 'Virtual Interior Designer', semester: 'Spring 2024', desc: 'AI system that takes room dimensions and generates interior design suggestions and layouts.' },
  { title: 'Environmental Impact History', semester: 'Spring 2024', desc: 'Data-driven analysis of historical environmental impact data using AI/ML techniques.' },
  { title: 'Facial Recognition System', semester: 'Spring 2024', desc: 'Computer vision model for face detection and recognition.' },
  { title: 'Speech Synthesis', semester: 'Spring 2024', desc: 'AI system for generating natural human-sounding speech from text.' },
  { title: 'Image Captioning (Multiple Groups)', semester: 'Fall 2023', desc: 'Vision + language model that generates natural language captions for input images. Led by Vincent Huynh and Mark Truong.' },
  { title: 'Recipe Recommender', semester: 'Fall 2023', desc: 'AI-powered system that recommends recipes based on available ingredients, dietary restrictions, and preferences. Led by Jonah Laing.' },
  { title: 'Species Identification (Sound Analysis)', semester: 'Fall 2023', desc: 'Audio-based classifier that identifies animal species from sound recordings. Led by Eren Ugur.' },
  { title: 'Car Counting in Images (Multiple Groups)', semester: 'Fall 2023', desc: 'Object detection model that counts vehicles in traffic or aerial images. Led by Ethan Morales, Everett Richards, and Aron Chen.' },
  { title: 'Spam Message Detection', semester: 'Fall 2023', desc: 'NLP classifier to identify spam messages using Hugging Face language models and zero-shot learning. Led by Sawyer Jones.' },
  { title: 'Canvas Discussion Post Similarity', semester: 'Spring 2023', desc: 'NLP model to determine semantic similarity between Canvas LMS discussion posts, scraping post data with BeautifulSoup.' },
  { title: 'Canvas Discussion Main Idea Extraction', semester: 'Spring 2023', desc: 'NLP model to extract the main idea or thesis from Canvas discussion posts.' },
  { title: 'Canvas Discussion Post Composition', semester: 'Spring 2023', desc: 'Generative model to compose new Canvas-style discussion posts based on a corpus.' },
  { title: 'Defining Words with Semantic Primes', semester: 'Spring 2023', desc: 'NLP research project exploring Natural Semantic Metalanguage — defining English words using universally translatable primitive concepts.' },
  { title: 'Translating Between Languages with Semantic Primes', semester: 'Spring 2023', desc: 'Machine translation system using semantic primes as an intermediate language layer.' },
  { title: 'Reddit Upvote Post Generator', semester: 'Spring 2023', desc: 'Generative model trained on top-upvoted Reddit posts to produce posts likely to succeed.' },
  { title: 'Reddit Controversial Sentiment Analysis', semester: 'Spring 2023', desc: 'Classifier to identify sentiment patterns in controversial Reddit threads.' },
  { title: 'Stock Price Predictor', semester: 'Fall 2022', desc: 'Predicted stock prices using machine learning techniques. Led by Filip Nyström.' },
  { title: 'Virtual Assistant', semester: 'Fall 2022', desc: 'Built a voice/text virtual assistant using AI. Led by Jai Sharma.' },
  { title: 'Monkeypox Detection', semester: 'Fall 2022', desc: 'Computer vision model to detect monkeypox from medical images. Led by Aaron Edlebeck.' },
  { title: 'Beans Classification', semester: 'Fall 2022', desc: 'Image classification model identifying bean varieties from photographs. Led by Nhat Huynh.' },
  { title: 'Sign Language Recognition', semester: 'Fall 2022', desc: 'Real-time sign language hand gesture recognition using computer vision. Led by Logan Wolff.' },
  { title: 'GPT-3 Bot', semester: 'Fall 2022', desc: 'AI chatbot built on top of GPT-3. Led by Marcus Casillas.' },
  { title: 'Athena2.0 + Stock Predictor', semester: 'Fall 2022', desc: 'Enhanced AI assistant with stock prediction capabilities. Led by Jai Sharma.' },
  { title: 'Sus Detector', semester: 'Fall 2022', desc: 'AI system to detect suspicious/anomalous behavior or content. Led by Omid Gholizadeh.' },
  { title: 'Unbeatable Pong AI', semester: 'Fall 2022', desc: 'Reinforcement learning agent trained to play Pong at a superhuman level. Led by Filip Nyström.' },
];

export default function Projects() {

  return (
    <div className="min-h-screen bg-gray-900">
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

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl text-center mb-4 text-white">Projects Archive</h1>
          <p className="text-center text-gray-400 mb-16 text-lg">Fall 2021 — Spring 2026</p>

          {/* ── Featured Projects ── */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Star className="w-7 h-7 text-red-400 fill-red-400" />
              <h2 className="text-3xl text-white">Featured Projects</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Galaxy Clustering */}
              <div className="bg-gray-800 border border-red-400/30 rounded-2xl p-6 hover:border-red-400/60 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl text-white">Galaxy Clustering & Classification</h3>
                  <span className="text-xs text-gray-400 shrink-0 ml-3 mt-1">Fall 2024</span>
                </div>
                <p className="text-gray-300 mb-4">ML model to cluster and classify galaxies from astronomical image data.</p>
                <a
                  href="https://github.com/aadib2/galaxy-image-classification"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-red-400 hover:text-red-300 border border-red-400/40 hover:border-red-300 rounded-lg px-3 py-1.5 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> GitHub
                </a>
              </div>

              {/* AI Sings */}
              <div className="bg-gray-800 border border-red-400/30 rounded-2xl p-6 hover:border-red-400/60 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl text-white">AI Sings Hackathon</h3>
                  <span className="text-xs text-gray-400 shrink-0 ml-3 mt-1">Spring 2022</span>
                </div>
                <p className="text-gray-300 mb-4">Build an AI system that generates musical components: lyrics, melodies, and/or harmonies. Evaluated on grammatical quality, semantic cohesion, melodic familiarity, and harmonic fit.</p>
                <a
                  href="https://drive.google.com/file/d/1VmmBZaOBDMfClzTTXbg9fyyLHcGRggtI/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-red-400 hover:text-red-300 border border-red-400/40 hover:border-red-300 rounded-lg px-3 py-1.5 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> Hackathon Prompt Doc
                </a>
              </div>

              {/* Yelp Review */}
              <div className="bg-gray-800 border border-red-400/30 rounded-2xl p-6 hover:border-red-400/60 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl text-white">Yelp Review Sentiment Prediction</h3>
                  <span className="text-xs text-gray-400 shrink-0 ml-3 mt-1">Fall 2021</span>
                </div>
                <p className="text-gray-300 mb-4">Predicted star ratings and overall sentiment of Yelp reviews using GloVe 50d embeddings and an LSTM neural network (Keras/TensorFlow). Built a custom BeautifulSoup web scraper for data collection. Achieved ~90% accuracy on unseen reviews.</p>
                <div className="flex flex-wrap gap-3">
                  <a href="https://drive.google.com/file/d/1v2nJquCftP2V8ZuY7S7Y-12c_JOWsNa2/view" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-red-400 hover:text-red-300 border border-red-400/40 hover:border-red-300 rounded-lg px-3 py-1.5 transition-colors">
                    <ExternalLink className="w-3.5 h-3.5" /> Final Presentation Slides
                  </a>
                  <a href="https://drive.google.com/file/d/1SH5aOcarDAj7bVZFN_0pTEVjLuTh10hg/view" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-red-400 hover:text-red-300 border border-red-400/40 hover:border-red-300 rounded-lg px-3 py-1.5 transition-colors">
                    <ExternalLink className="w-3.5 h-3.5" /> Project Outline Doc
                  </a>
                </div>
              </div>

              {/* AskReddit */}
              <div className="bg-gray-800 border border-red-400/30 rounded-2xl p-6 hover:border-red-400/60 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl text-white">AskReddit Post Evaluator (AI-A-THON)</h3>
                  <span className="text-xs text-gray-400 shrink-0 ml-3 mt-1">Fall 2021</span>
                </div>
                <p className="text-gray-300 mb-4">Hackathon project: LSTM binary classifier that predicts whether a Reddit post will reach the front page. Used GloVe 100d embeddings. When confidence threshold set to 0.75, achieved 88% precision.</p>
                <div className="flex flex-wrap gap-3">
                  <a href="https://drive.google.com/file/d/1QHXZUoUeFYRTvNR7DTSzhcULr8jLm_zO/view" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-red-400 hover:text-red-300 border border-red-400/40 hover:border-red-300 rounded-lg px-3 py-1.5 transition-colors">
                    <ExternalLink className="w-3.5 h-3.5" /> Hackathon Presentation Slides
                  </a>
                  <a href="https://drive.google.com/file/d/1esMORaGRpiDg5TbfAWLh-M84SmA63xeN/view" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-red-400 hover:text-red-300 border border-red-400/40 hover:border-red-300 rounded-lg px-3 py-1.5 transition-colors">
                    <ExternalLink className="w-3.5 h-3.5" /> Hackathon Prompt
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ── Past Projects ── */}
          <div>
            <h2 className="text-3xl text-white mb-8">Past Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {pastProjects.map(p => (
                <div key={p.title} className="bg-gray-800 border border-red-400/30 rounded-2xl p-6 hover:border-red-400/60 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl text-white">{p.title}</h3>
                    <span className="text-xs text-gray-400 shrink-0 ml-3 mt-1">{p.semester}</span>
                  </div>
                  <p className="text-gray-300 mb-4">{p.desc}</p>
                  <div className="flex flex-wrap items-center gap-3">
                    {p.tag && <span className="inline-block bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs">{p.tag}</span>}
                    {p.links?.map(l => (
                      <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-red-400 hover:text-red-300 border border-red-400/40 hover:border-red-300 rounded-lg px-3 py-1.5 transition-colors">
                        <ExternalLink className="w-3.5 h-3.5" /> {l.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
