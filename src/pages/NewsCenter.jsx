import React, { useState } from "react";
import {
  Search,
  Calendar,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Mail,
  Facebook,
  Twitter,
  Share2,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const newsArticles = [
  {
    id: 1,
    title: "CPCL Announces Record Q4 Profits",
    date: "2024-05-15",
    category: "Financial",
    excerpt:
      "Chennai Petroleum Corporation Limited (CPCL) reported record-breaking profits for Q4 of the fiscal year 2023-2024...",
    image: "/placeholder.svg?height=200&width=300",
    featured: true,
  },
  {
    id: 2,
    title: "New Environmental Initiative Launched",
    date: "2024-05-10",
    category: "Sustainability",
    excerpt:
      "CPCL introduces a groundbreaking environmental initiative aimed at reducing carbon emissions by 30% over the next five years...",
    image: "/placeholder.svg?height=200&width=300",
    featured: false,
  },
  {
    id: 3,
    title: "CPCL Expands Refinery Capacity",
    date: "2024-05-05",
    category: "Operations",
    excerpt:
      "In a move to meet growing demand, CPCL announces plans to expand its refinery capacity by 20% in the coming year...",
    image: "/placeholder.svg?height=200&width=300",
    featured: false,
  },
  {
    id: 4,
    title: "CPCL Receives Safety Excellence Award",
    date: "2024-04-28",
    category: "Awards",
    excerpt:
      "Chennai Petroleum Corporation Limited has been recognized with the prestigious Safety Excellence Award for its outstanding safety practices...",
    image: "/placeholder.svg?height=200&width=300",
    featured: false,
  },
  {
    id: 5,
    title: "New Partnership to Boost Clean Energy Research",
    date: "2024-04-20",
    category: "Innovation",
    excerpt:
      "CPCL announces a strategic partnership with a leading clean energy research institute to develop next-generation renewable fuels...",
    image: "/placeholder.svg?height=200&width=300",
    featured: false,
  },
  {
    id: 6,
    title: "CPCL Launches Community Outreach Program",
    date: "2024-04-15",
    category: "Corporate Social Responsibility",
    excerpt:
      "As part of its commitment to social responsibility, CPCL introduces a new community outreach program focused on education and skill development...",
    image: "/placeholder.svg?height=200&width=300",
    featured: false,
  },
];

const pressReleases = [
  {
    id: 1,
    title: "CPCL Announces Q4 and FY 2023-24 Results",
    date: "2024-05-15",
  },
  {
    id: 2,
    title: "CPCL Signs MoU for Clean Energy Research",
    date: "2024-04-22",
  },
  {
    id: 3,
    title: "Annual General Meeting Scheduled for July 15, 2024",
    date: "2024-04-10",
  },
  {
    id: 4,
    title: "CPCL Declares Interim Dividend for FY 2023-24",
    date: "2024-03-28",
  },
  {
    id: 5,
    title: "New Independent Director Appointed to CPCL Board",
    date: "2024-03-15",
  },
];

const categories = [
  ...new Set(newsArticles.map((article) => article.category)),
];

export default function EnhancedNewsCenter() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [email, setEmail] = useState("");
  const articlesPerPage = 3;

  const filteredArticles = newsArticles.filter(
    (article) =>
      (article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.category.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedCategory === "" || article.category === selectedCategory)
  );

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with email: ${email}`);
    setEmail("");
  };

  const shareArticle = (articleTitle) => {
    alert(`Sharing article: ${articleTitle}`);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
        <main className="container mx-auto px-4 py-8 sm:px-6 ">
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold">CPCL News Center</h1>
              </div>
              <div className="mb-8">
                <div className="flex flex-col sm:flex-row justify-between items-center">
                  <div className="relative max-w-lg w-full mb-4 sm:mb-0">
                    <input
                      type="text"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Search news articles..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                  <select
                    className="w-full sm:w-auto pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    <option value="">All Categories</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h2 className="text-2xl font-bold mb-4">Latest News</h2>
                  {currentArticles.map((article) => (
                    <div
                      key={article.id}
                      className="bg-white shadow rounded-lg overflow-hidden mb-6"
                    >
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <Calendar className="h-4 w-4 mr-2" />
                          {article.date}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{article.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                            {article.category}
                          </span>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => shareArticle(article.title)}
                              className="text-gray-500 hover:text-gray-700"
                            >
                              <Share2 className="h-5 w-5" />
                            </button>
                            <a
                              href="#"
                              className="text-blue-600 hover:text-blue-800 flex items-center"
                            >
                              Read more
                              <ArrowRight className="h-4 w-4 ml-1" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="flex justify-center mt-6">
                    <nav
                      className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                      aria-label="Pagination"
                    >
                      <button
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                      >
                        <span className="sr-only">Previous</span>
                        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                      </button>
                      {Array.from({
                        length: Math.ceil(
                          filteredArticles.length / articlesPerPage
                        ),
                      }).map((_, index) => (
                        <button
                          key={index}
                          onClick={() => paginate(index + 1)}
                          className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                            currentPage === index + 1
                              ? "z-10 bg-blue-50 border-blue-500 text-blue-600"
                              : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50"
                          }`}
                        >
                          {index + 1}
                        </button>
                      ))}
                      <button
                        onClick={() => paginate(currentPage + 1)}
                        disabled={
                          currentPage ===
                          Math.ceil(filteredArticles.length / articlesPerPage)
                        }
                        className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                      >
                        <span className="sr-only">Next</span>
                        <ChevronRight className="h-5 w-5" aria-hidden="true" />
                      </button>
                    </nav>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Press Releases</h2>
                  <div className="bg-white shadow rounded-lg overflow-hidden mb-8">
                    <ul className="divide-y divide-gray-200">
                      {pressReleases.map((release) => (
                        <li key={release.id} className="p-4 hover:bg-gray-50">
                          <a href="#" className="block">
                            <p className="text-sm font-medium text-gray-900">
                              {release.title}
                            </p>
                            <p className="text-sm text-gray-500 mt-1">
                              {release.date}
                            </p>
                          </a>
                        </li>
                      ))}
                    </ul>
                    <div className="p-4 border-t border-gray-200">
                      <a
                        href="#"
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
                      >
                        View all press releases
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </a>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold mb-4">Newsletter</h2>
                  <div className="bg-white shadow rounded-lg overflow-hidden p-6">
                    <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
                    <p className="text-gray-600 mb-4">
                      Subscribe to our newsletter for the latest CPCL news and
                      updates.
                    </p>
                    <form
                      onSubmit={handleSubscribe}
                      className="flex flex-col space-y-4"
                    >
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                      <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
                      >
                        Subscribe
                      </button>
                    </form>
                  </div>

                  <h2 className="text-2xl font-bold my-4">Follow Us</h2>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-blue-500">
                      <Facebook className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-blue-400">
                      <Twitter className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-blue-700">
                      <Mail className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
