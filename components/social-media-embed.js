"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

export default function SocialMediaEmbed({ platform, username, count = 5 }) {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true)

        if (platform === "twitter" || platform === "x") {
          // For X/Twitter, you would use the Twitter API v2
          // This requires authentication and proper API keys
          const response = await fetch(`/api/twitter/${username}?count=${count}`)
          if (response.ok) {
            const data = await response.json()
            setPosts(data.posts || [])
          } else {
            throw new Error("Failed to fetch Twitter posts")
          }
        } else if (platform === "linkedin") {
          // For LinkedIn, you would use the LinkedIn API
          // This requires OAuth authentication
          const response = await fetch(`/api/linkedin/${username}?count=${count}`)
          if (response.ok) {
            const data = await response.json()
            setPosts(data.posts || [])
          } else {
            throw new Error("Failed to fetch LinkedIn posts")
          }
        }
      } catch (err) {
        setError(err.message)
        // Fallback to embedded widgets
        loadEmbeddedWidget()
      } finally {
        setLoading(false)
      }
    }

    const loadEmbeddedWidget = () => {
      if (platform === "twitter" || platform === "x") {
        // Load Twitter widget
        const script = document.createElement("script")
        script.src = "https://platform.twitter.com/widgets.js"
        script.async = true
        document.body.appendChild(script)
      } else if (platform === "linkedin") {
        // Load LinkedIn widget
        const script = document.createElement("script")
        script.src = "https://platform.linkedin.com/in.js"
        script.async = true
        document.body.appendChild(script)
      }
    }

    fetchPosts()
  }, [platform, username, count])

  if (loading) {
    return (
      <Card className="shadow-xl mb-12">
        <CardContent className="p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Recent {platform === "linkedin" ? "LinkedIn" : "X"} Posts
          </h2>
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

  if (error) {
    return (
      <Card className="shadow-xl mb-12">
        <CardContent className="p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Recent {platform === "linkedin" ? "LinkedIn" : "X"} Posts
          </h2>
          <div className="text-center py-8">
            {platform === "twitter" || platform === "x" ? (
              <div>
                <a
                  className="twitter-timeline"
                  data-height="400"
                  data-theme="light"
                  data-tweet-limit={count}
                  href={`https://twitter.com/${username}`}
                >
                  Tweets by @{username}
                </a>
              </div>
            ) : (
              <div>
                <div className="linkedin-embed" data-id={username} data-posts={count}>
                  <a href={`https://linkedin.com/in/${username}`} target="_blank" rel="noopener noreferrer">
                    View {username}'s LinkedIn Profile
                  </a>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="shadow-xl mb-12">
      <CardContent className="p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Recent {platform === "linkedin" ? "LinkedIn" : "X"} Posts
        </h2>
        <div className="space-y-6">
          {posts.map((post, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <p className="text-gray-700 mb-3">{post.content}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{new Date(post.created_at).toLocaleDateString()}</span>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:text-orange-700"
                >
                  View Post →
                </a>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
