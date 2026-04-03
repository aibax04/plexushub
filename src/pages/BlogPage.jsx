import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { collection, getDocs, doc, getDoc, query, orderBy } from 'firebase/firestore'
import { db } from '../firebase'
import { ArrowLeft, Calendar, Clock, ChevronRight } from 'lucide-react'
import { useConsultationBooking } from '../context/ConsultationBookingContext'

function formatDate(timestamp) {
  if (!timestamp) return ''
  const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp)
  return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
}

function BlogPost({ post }) {
  return (
    <article className="min-h-screen bg-bg">
      <div className="container mx-auto px-6 max-w-3xl pt-32 pb-24">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-primary transition-colors mb-10">
          <ArrowLeft className="w-4 h-4" />
          Back to all posts
        </Link>

        {post.coverImage && (
          <div className="rounded-2xl overflow-hidden mb-10 border border-border/50">
            <img src={post.coverImage} alt={post.title} className="w-full h-auto object-cover" loading="eager" />
          </div>
        )}

        <div className="flex items-center gap-4 text-xs text-text-muted mb-6">
          {post.category && (
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-bold uppercase tracking-widest border border-primary/20">
              {post.category}
            </span>
          )}
          {post.date && (
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {formatDate(post.date)}
            </span>
          )}
          {post.readTime && (
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          )}
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-text leading-[1.1] mb-8">
          {post.title}
        </h1>

        {post.author && (
          <div className="flex items-center gap-3 mb-10 pb-10 border-b border-border/50">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
              {post.author.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-medium text-text">{post.author}</p>
              {post.authorRole && <p className="text-xs text-text-muted">{post.authorRole}</p>}
            </div>
          </div>
        )}

        <div
          className="prose prose-lg max-w-none text-text leading-relaxed
            [&_h2]:text-2xl [&_h2]:font-medium [&_h2]:tracking-tight [&_h2]:mt-12 [&_h2]:mb-4
            [&_h3]:text-xl [&_h3]:font-medium [&_h3]:mt-8 [&_h3]:mb-3
            [&_p]:mb-5 [&_p]:text-text-muted [&_p]:leading-relaxed
            [&_ul]:pl-6 [&_ul]:mb-5 [&_ul]:text-text-muted [&_ul]:list-disc
            [&_ol]:pl-6 [&_ol]:mb-5 [&_ol]:text-text-muted [&_ol]:list-decimal
            [&_li]:mb-2
            [&_a]:text-primary [&_a]:underline
            [&_blockquote]:border-l-4 [&_blockquote]:border-primary/30 [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:text-text-muted
            [&_img]:rounded-xl [&_img]:my-8 [&_img]:border [&_img]:border-border/50"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  )
}

function BlogCard({ post }) {
  return (
    <Link
      to={`/blog?post=${post.id}`}
      className="group flex flex-col bg-white rounded-2xl border border-border/50 overflow-hidden hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md"
    >
      {post.coverImage && (
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={post.coverImage}
            alt={post.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 text-[11px] text-text-muted mb-4">
          {post.category && (
            <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-bold uppercase tracking-widest border border-primary/20">
              {post.category}
            </span>
          )}
          {post.date && <span>{formatDate(post.date)}</span>}
        </div>
        <h3 className="text-lg font-medium text-text tracking-tight mb-2 group-hover:text-primary transition-colors leading-snug">
          {post.title}
        </h3>
        {post.excerpt && (
          <p className="text-sm text-text-muted leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
        )}
        <div className="mt-auto pt-4 border-t border-border/50 flex items-center justify-between">
          {post.author && <span className="text-xs font-medium text-text">{post.author}</span>}
          <span className="text-xs text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
            Read more <ChevronRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </Link>
  )
}

function BlogPage() {
  const [posts, setPosts] = useState([])
  const [singlePost, setSinglePost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [searchParams] = useSearchParams()
  const postId = searchParams.get('post')
  const { openConsultationModal } = useConsultationBooking()

  useEffect(() => {
    async function fetchPost() {
      setLoading(true)
      try {
        const snap = await getDoc(doc(db, 'blogs', postId))
        if (snap.exists()) {
          setSinglePost({ id: snap.id, ...snap.data() })
        }
      } catch (err) {
        console.error('Error fetching post:', err)
      }
      setLoading(false)
    }

    async function fetchPosts() {
      setLoading(true)
      try {
        const q = query(collection(db, 'blogs'), orderBy('date', 'desc'))
        const snap = await getDocs(q)
        setPosts(snap.docs.map((d) => ({ id: d.id, ...d.data() })))
      } catch (err) {
        console.error('Error fetching posts:', err)
      }
      setLoading(false)
    }

    if (postId) {
      fetchPost()
    } else {
      setSinglePost(null)
      fetchPosts()
    }
  }, [postId])

  if (loading) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    )
  }

  if (postId && singlePost) {
    return <BlogPost post={singlePost} />
  }

  return (
    <div className="min-h-screen bg-bg">
      <section className="pt-32 sm:pt-40 pb-16 sm:pb-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6 border border-primary/20">
              Our Blog
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-text leading-[1.05] mb-6">
              Dental health insights
            </h1>
            <p className="text-text-muted text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Tips, guides, and stories from the Plexus Dental team to help you make informed decisions about your oral health.
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-text-muted text-lg mb-6">No blog posts yet. Check back soon!</p>
              <button
                type="button"
                onClick={openConsultationModal}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors"
              >
                Book a Consultation <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default BlogPage
