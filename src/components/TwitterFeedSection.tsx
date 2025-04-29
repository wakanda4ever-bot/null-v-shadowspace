
import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";

const TWITTER_POSTS = [
  {
    id: 1,
    username: "NULLVijayawada",
    handle: "@null_vijayawada",
    avatar: "/placeholder.svg",
    content: "We're excited to announce our next #Humla event on Advanced Penetration Testing! Join us on March 25th to learn from industry experts. #Cybersecurity #NULLVijayawada",
    date: "2d ago",
    likes: 42,
    retweets: 15
  },
  {
    id: 2,
    username: "NULLVijayawada",
    handle: "@null_vijayawada",
    avatar: "/placeholder.svg",
    content: "Thank you to everyone who attended our Pre-Null Meet yesterday! It was amazing to see so many new faces interested in cybersecurity. #NULLCommunity #CyberSecurity",
    date: "Apr 19",
    likes: 37,
    retweets: 12
  },
  {
    id: 3,
    username: "NULLVijayawada",
    handle: "@null_vijayawada",
    avatar: "/placeholder.svg",
    content: "Last night's Public Bachaav session on incident response was a huge success! Special thanks to our guest speakers for sharing their invaluable expertise. #SecurityAwareness",
    date: "Apr 12",
    likes: 53,
    retweets: 21
  },
  {
    id: 4,
    username: "NULLVijayawada",
    handle: "@null_vijayawada",
    avatar: "/placeholder.svg",
    content: "Registration is now open for our upcoming Workshop on secure coding practices. Limited seats available - sign up now! #SecureCoding #DeveloperSecurity",
    date: "Apr 5",
    likes: 29,
    retweets: 18
  },
  {
    id: 5,
    username: "NULLVijayawada",
    handle: "@null_vijayawada",
    avatar: "/placeholder.svg",
    content: "Excited to see so many students at today's Public Puliya discussion on emerging threats in cybersecurity. The future of security is bright! #CyberEducation",
    date: "Mar 28",
    likes: 45,
    retweets: 14
  }
];

const TwitterPost = ({ post }) => {
  return (
    <div className="glass p-4 mb-4 rounded-xl">
      <div className="flex items-start">
        <div className="mr-3 flex-shrink-0">
          <img 
            src={post.avatar} 
            alt={post.username} 
            className="w-10 h-10 rounded-full"
          />
        </div>
        <div className="flex-grow">
          <div className="flex items-center">
            <h4 className="font-semibold">{post.username}</h4>
            <span className="ml-2 text-sm text-muted-foreground">{post.handle}</span>
            <span className="ml-2 text-xs text-muted-foreground">· {post.date}</span>
          </div>
          <p className="mt-2 text-sm">{post.content}</p>
          <div className="mt-3 flex items-center text-xs text-muted-foreground">
            <span className="mr-4">{post.retweets} Retweets</span>
            <span>{post.likes} Likes</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const TwitterFeedSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold font-mono">Community Updates</h2>
          <p className="mt-4 text-muted-foreground">
            Follow us on social media to stay updated with our latest events and announcements
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <ScrollArea className="h-[500px] rounded-md">
            <div className="pr-4">
              {TWITTER_POSTS.map((post) => (
                <TwitterPost key={post.id} post={post} />
              ))}
            </div>
          </ScrollArea>
          
          <div className="mt-8 text-center">
            <a 
              href="https://twitter.com/null_vijayawada" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Follow us on Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwitterFeedSection;
