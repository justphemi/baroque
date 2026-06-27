"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Twitter, ExternalLink, Calendar } from "lucide-react"

export default function SocialPosts({ member }) {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call with mock data since free social media APIs are limited
    const fetchPosts = async () => {
      setLoading(true)

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mock posts data - in a real implementation, you'd call actual APIs
      const mockPosts = [
        {
          id: 1,
          platform: "linkedin",
          content: `Excited to share insights on digital transformation strategies that are reshaping the consulting landscape. The future belongs to organizations that embrace innovation while maintaining operational excellence.`,
          date: "2024-06-08",
          engagement: { likes: 45, comments: 12, shares: 8 },
          url: "#",
        },
        {
          id: 2,
          platform: "twitter",
          content: `Just wrapped up an incredible training session on cloud infrastructure best practices. The enthusiasm and questions from participants remind me why I love what we do at Baroque Variations! 🚀`,
          date: "2024-06-07",
          engagement: { likes: 23, retweets: 7, replies: 5 },
          url: "#",
        },
        {
          id: 3,
          platform: "linkedin",
          content: `Reflecting on the importance of cybersecurity in today's digital landscape. Every organization needs a robust security framework - it's not just about technology, it's about protecting your future.`,
          date: "2024-06-05",
          engagement: { likes: 67, comments: 18, shares: 15 },
          url: "#",
        },
        {
          id: 4,
          platform: "twitter",
          content: `Proud to be part of a team that's making real impact in the engineering consulting space. When passion meets purpose, extraordinary things happen! #Engineering #Consulting`,
          date: "2024-06-04",
          engagement: { likes: 31, retweets: 12, replies: 8 },
          url: "#",
        },
        {
          id: 5,
          platform: "linkedin",
          content: `The key to successful project management isn't just following methodologies - it's about understanding people, fostering collaboration, and maintaining clear communication throughout the journey.`,
          date: "2024-06-02",
          engagement: { likes: 52, comments: 14, shares: 9 },
          url: "#",
        },
        {
          id: 6,
          platform: "twitter",
          content: `Innovation doesn't happen in isolation. It's the result of diverse minds coming together, challenging assumptions, and pushing boundaries. That's the Baroque Variations way! 💡`,
          date: "2024-06-01",
          engagement: { likes: 28, retweets: 9, replies: 6 },
          url: "#",
        },
        {
          id: 7,
          platform: "linkedin",
          content: `Grateful for the opportunity to mentor young professionals entering the consulting field. Their fresh perspectives and innovative ideas continue to inspire and challenge us to think differently.`,
          date: "2024-05-30",
          engagement: { likes: 73, comments: 22, shares: 11 },
          url: "#",
        },
        {
          id: 8,
          platform: "twitter",
          content: `Just finished reviewing some fascinating case studies on sustainable engineering practices. The intersection of technology and environmental responsibility is where the future lies! 🌱`,
          date: "2024-05-28",
          engagement: { likes: 19, retweets: 5, replies: 3 },
          url: "#",
        },
      ]

      setPosts(mockPosts)
      setLoading(false)
    }

    fetchPosts()
  }, [member])

  if (loading) {
    return (
      <Card className="shadow-xl mb-12">
        <CardContent className="p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Posts</h2>
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="shadow-xl mb-12">
      <CardContent className="p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Posts</h2>
        <div className="grid gap-6">
          {posts.map((post) => (
            <div key={post.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-2">
                  {post.platform === "linkedin" ? (
                    <Linkedin className="w-5 h-5 text-orange-600" />
                  ) : (
                    <Twitter className="w-5 h-5 text-green-500" />
                  )}
                  <span className="text-sm font-medium text-gray-600 capitalize">{post.platform}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">{post.content}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  {post.platform === "linkedin" ? (
                    <>
                      <span>{post.engagement.likes} likes</span>
                      <span>{post.engagement.comments} comments</span>
                      <span>{post.engagement.shares} shares</span>
                    </>
                  ) : (
                    <>
                      <span>{post.engagement.likes} likes</span>
                      <span>{post.engagement.retweets} retweets</span>
                      <span>{post.engagement.replies} replies</span>
                    </>
                  )}
                </div>
                <a
                  href={post.url}
                  className="flex items-center space-x-1 text-orange-600 hover:text-orange-700 text-sm font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>View Post</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
