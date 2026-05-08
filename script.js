
// ===== HEALTH & WELLNESS BLOG POSTS WITH REAL IMAGES =====
const posts = [
    {
        id: 1,
    title: "10 Evidence-Based Ways to Boost Your Immune System",
    date: "March 15, 2024",
    category: "Wellness",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?w=600&h=400&fit=crop",
    excerpt: "Discover science-backed strategies to support your immune system naturally.",
        content: `
            <div class="post-featured-image" style="height:300px;background-image:url('https://images.unsplash.com/photo-1584017911766-d451b3d0e0de?w=800&h=400&fit=crop');background-size:cover;background-position:center;border-radius:12px;"></div>
            <p>Your immune system works tirelessly to protect you from harmful pathogens. Research shows that certain lifestyle habits can support your body's natural defenses.</p>
            <div class="affiliate-recommendation">
                <img src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=100&h=100&fit=crop" alt="Immune support product" style="width:80px;height:80px;border-radius:10px;float:left;margin-right:1rem;">
                <h4>✅ My Top Recommended Immune Support</h4>
                <p>After researching dozens of products, this is the one I trust most.</p>
                <a href="https://www.checkout-ds24.com/redir/589747/seharkhadija186cafe" class="affiliate-button" rel="sponsored" target="_blank">Check Price on Digistore24 →</a>
                <div style="clear:both"></div>
            </div>
            <h3>1. Prioritize Sleep</h3>
            <p>Studies show that people who don't get enough quality sleep are more susceptible to getting sick.</p>
            <h3>2. Eat a Rainbow</h3>
            <p>Different colored fruits and vegetables provide various nutrients that support immune function.</p>
            <h3>3. Manage Stress</h3>
            <p>Chronic stress suppresses immune response. Even 10 minutes of daily meditation can make a difference.</p>
            <p><em>Disclaimer: This article is for informational purposes only and is not medical advice.</em></p>
        `,
        author: "Wellness Guide"
    },
    {
        id: 2,
        title: "Starting Your Fitness Journey: A Beginner's Guide",
        date: "March 10, 2024",
        category: "Fitness",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop",
        excerpt: "Everything you need to know to start exercising safely and stick with it long-term.",
        content: `
            <div class="post-featured-image" style="height:300px;background-image:url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=400&fit=crop');background-size:cover;background-position:center;border-radius:12px;"></div>
            <p>Starting a fitness routine can feel overwhelming. This guide cuts through the noise and gives you a sustainable approach.</p>
            <div class="affiliate-recommendation">
                <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop" alt="Fitness program" style="width:80px;height:80px;border-radius:10px;float:left;margin-right:1rem;">
                <h4>✅ My Top Recommended Fitness Tool</h4>
                <p>After testing dozens of fitness programs, this is the one that gave me real results.</p>
                <a href="http://energetic-eternity.de/produkt/health-bundle/#aff=seharkhadija186cafe" class="affiliate-button" rel="sponsored" target="_blank">Check Price on Digistore24 →</a>
                <div style="clear:both"></div>
            </div>
            <h3>Step 1: Define Your "Why"</h3>
            <p>Before choosing exercises, understand why you want to exercise.</p>
            <h3>Step 2: Start Small</h3>
            <p>The biggest mistake beginners make is doing too much too soon.</p>
            <p><strong>Remember:</strong> Every expert was once a beginner who didn't quit.</p>
        `,
        author: "Wellness Guide"
    },
    {
        id: 3,
        title: "Mindful Eating: Transform Your Relationship with Food",
        date: "March 5, 2024",
        category: "Nutrition",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop",
        excerpt: "How to eat intuitively, enjoy your food more, and stop emotional eating.",
        content: `
            <div class="post-featured-image" style="height:300px;background-image:url('https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop');background-size:cover;background-position:center;border-radius:12px;"></div>
            <p>Mindful eating isn't a diet. It's a practice that helps you develop a healthier relationship with food.</p>
            <div class="affiliate-recommendation">
                <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=100&h=100&fit=crop" alt="Nutrition guide" style="width:80px;height:80px;border-radius:10px;float:left;margin-right:1rem;">
                <h4>✅ The Supplement That Made a Real Difference</h4>
                <p>Not all nutrition products are created equal. This is the one that actually improved my health markers.</p>
                <a href="https://www.digistore24.com/redir/632164/seharkhadija186cafe" class="affiliate-button" rel="sponsored" target="_blank">Check Price on Digistore24 →</a>
                <div style="clear:both"></div>
            </div>
            <h3>What is Mindful Eating?</h3>
            <p>Mindful eating means paying attention to your food — on purpose, moment by moment, without judgment.</p>
            <h3>The Principles of Mindful Eating</h3>
            <p>Eat without distractions, engage all senses, eat slowly, and check in with fullness.</p>
        `,
        author: "Wellness Guide"
    },
    {
        id: 4,
        title: "Sleep Hygiene: 7 Science-Backed Tips for Better Rest",
        date: "February 28, 2024",
        category: "Sleep",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=600&h=400&fit=crop",
        excerpt: "Improve your sleep quality with these evidence-based strategies that actually work.",
        content: `
            <div class="post-featured-image" style="height:300px;background-image:url('https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800&h=400&fit=crop');background-size:cover;background-position:center;border-radius:12px;"></div>
            <p>Sleep is the foundation of good health. Yet 1 in 3 adults doesn't get enough sleep.</p>
            <div class="affiliate-recommendation">
                <img src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=100&h=100&fit=crop" alt="Sleep aid" style="width:80px;height:80px;border-radius:10px;float:left;margin-right:1rem;">
                <h4>✅ My Top Recommended Sleep Solution</h4>
                <p>After struggling with insomnia for years, this is the only thing that helped me sleep through the night.</p>
                <a href="http://www.betterdailyguide.site/sleep-hacking#aff=seharkhadija186cafe" class="affiliate-button" rel="sponsored" target="_blank">Check Price on Digistore24 →</a>
                <div style="clear:both"></div>
            </div>
            <h3>1. Consistency is King</h3>
            <p>Go to bed and wake up at the same time every day — even weekends.</p>
            <h3>2. Create a Wind-Down Routine</h3>
            <p>30-60 minutes before bed, dim the lights and do calming activities.</p>
            <p><strong>When to Seek Help:</strong> If you consistently struggle with sleep despite good habits, consult a healthcare provider.</p>
        `,
        author: "Wellness Guide"
    },
    {
        id: 5,
        title: "Stress Management Techniques That Actually Work",
        date: "February 20, 2024",
        category: "Mental Wellness",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop",
        excerpt: "Evidence-based strategies to manage stress and build resilience.",
        content: `
            <div class="post-featured-image" style="height:300px;background-image:url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=400&fit=crop');background-size:cover;background-position:center;border-radius:12px;"></div>
            <p>Stress is inevitable, but suffering is optional. These science-backed techniques can help you manage stress more effectively.</p>
            <div class="affiliate-recommendation">
                <img src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=100&h=100&fit=crop" alt="Stress relief" style="width:80px;height:80px;border-radius:10px;float:left;margin-right:1rem;">
                <h4>✅ The Calming Method That Changed My Life</h4>
                <p>I've tried everything from meditation apps to breathing techniques. This one works best.</p>
                <a href="https://wellnesswithsher.neocities.org/mental-health-wellness#aff=seharkhadija186cafe" class="affiliate-button" rel="sponsored" target="_blank">Check Price on Digistore24 →</a>
                <div style="clear:both"></div>
            </div>
            <h3>1. The 5-Minute Breathing Break</h3>
            <p>Box breathing: Inhale for 4 counts, hold for 4, exhale for 4, hold for 4.</p>
            <h3>2. Move Your Body</h3>
            <p>Exercise releases endorphins and reduces stress hormones.</p>
        `,
        author: "Wellness Guide"
    },
    {
        id: 6,
        title: "The Best Vitamin D Supplement I've Found",
        date: "March 20, 2024",
        category: "Nutrition",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=400&fit=crop",
        excerpt: "After testing 5 different brands, here's the one I actually recommend.",
        content: `
            <div class="post-featured-image" style="height:300px;background-image:url('https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&h=400&fit=crop');background-size:cover;background-position:center;border-radius:12px;"></div>
            <p>Vitamin D is essential for immune health. After my blood work showed low levels, I started researching supplements.</p>
            <div class="affiliate-recommendation">
                <img src="https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=100&h=100&fit=crop" alt="Vitamin D supplement" style="width:80px;height:80px;border-radius:10px;float:left;margin-right:1rem;">
                <h4>✅ My Top Recommended Vitamin D Supplement</h4>
                <p>After researching dozens of products, this is the one I trust most.</p>
                <a href="https://www.advancedbionutritionals.com/DS24/Advanced-Amino/Muscle-Mass-Loss/HD.htm#aff=seharkhadija186cafe" class="affiliate-button" rel="sponsored" target="_blank">Check Price on Digistore24 →</a>
                <div style="clear:both"></div>
            </div>
            <h3>Why I Started Looking</h3>
            <p>I was feeling tired and getting sick often. My doctor tested my vitamin D levels and they were low.</p>
            <h3>What I Looked For</h3>
            <ul><li>Third-party tested for purity</li><li>Proper dosage</li><li>Good bioavailability</li></ul>
            <p><strong>Important:</strong> Always consult your doctor before starting any supplement.</p>
        `,
        author: "Wellness Guide"
    }
];

// Display posts on homepage and blog page
document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('posts-container');
    if (postsContainer) displayPosts(postsContainer);
    if (window.location.pathname.includes('post.html')) loadSinglePost();
});

function displayPosts(container) {
    let html = '';
    posts.forEach(post => {
        html += `
            <div class="post-card">
                <div class="post-image" style="background-image: url('${post.image}')"></div>
                <div class="post-content">
                    <span class="post-category">${post.category}</span>
                    <h3 class="post-title"><a href="post.html?id=${post.id}">${post.title}</a></h3>
                    <div class="post-meta"><span>${post.date}</span><span>${post.readTime}</span></div>
                    <p class="post-excerpt">${post.excerpt}</p>
                    <a href="post.html?id=${post.id}" class="read-more">Read Article →</a>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function loadSinglePost() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = parseInt(urlParams.get('id'));
    const container = document.getElementById('post-content');
    if (!container) return;
    
    const post = posts.find(p => p.id === postId);
    
    if (post) {
        container.innerHTML = `
            <header class="post-header">
                <span class="post-category">${post.category}</span>
                <h1>${post.title}</h1>
                <div class="post-meta"><span>${post.date}</span><span>${post.readTime}</span></div>
            </header>
            <div class="post-body">${post.content}</div>
            <div class="post-footer"><p><em>By ${post.author}</em></p></div>
        `;
    } else {
        container.innerHTML = '<p class="error">Post not found. <a href="blog.html">View all articles</a></p>';
    }
}