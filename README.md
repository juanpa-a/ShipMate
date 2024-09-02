# ShipMate 🧉

Welcome to **ShipMate**, where we believe shipping code should be as easy as pie—if pie were a complex algorithm you need to debug at 3 AM. This boilerplate is your golden ticket to web development glory, combining the powers of **PocketBase**, **PocketBase-Typegen**, **Astro**, **Tailwind**, and **Preact**. It’s like a tech bro’s dream come true, minus the overpriced coffee and fancy lattes.

## Why ShipMate?

Because who needs sleep or sanity when you can ship code faster than you can say, “Why is my app crashing?” This little gem isn’t built for apps that scale to the moon—no, it’s more like a friendly taco stand. It can handle a good crowd, but don’t expect it to run a five-star Michelin restaurant.

## Getting Started

Ready to embark on this chaotic adventure? Here’s how to get your ShipMate up and running without losing your mind (or your sense of humor):

### Step 1: Start PocketBase

Fire up PocketBase like it’s your personal assistant. It’s just waiting to serve you data, and it won’t even complain about it! `bun dev:api`

### Step 2: Create a Collection

Create a collection called **"projects"** with a field called **name** (it’s a string, because we’re not trying to win any awards here) and another field called **authorID** that’s a relationship to the **"users"** collection. Relationships are important—just ask any relationship expert!
<img width="670" alt="image" src="https://github.com/user-attachments/assets/d96ac912-8d39-49a9-8872-34e82cf8e7f6">

### Step 3: Set API Rules
Don’t forget to set up the API rules to make sure your data is as secure as a taco stand at 3 AM. This step ensures only authorized users can access or modify the data. It’s like putting up a "No Trespassing" sign but for your app. <img width="667" alt="image" src="https://github.com/user-attachments/assets/215562e1-0ee7-4a6b-afcc-2cd8b79dafd0">


### Step 4: Generate Types

Run `bun sync` from the root to generate types using **PocketBase-Typegen**. This is where the magic happens—like watching your code go from “meh” to “wow!” It’s like watching a caterpillar turn into a butterfly, but less dramatic.

### Step 5: Set Up the Environment

Add an `.env` file inside the `ui/` directory with the following groundbreaking structure:

```
PUBLIC_BASE_API_URL="http://127.0.0.1:8090"

AUTH_TRUST_HOST=true
AUTH_SECRET=""

GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""

```

Feel free to fill in those Google secrets like you’re trying to win the lottery. Just don’t forget to keep them secret—no one wants their keys handed out like candy!

### Step 5: Start the UI

Finally, start the UI like you’re launching a rocket. Because who doesn’t love the thrill of watching their own creations take off into the wild? `bun dev:ui`

## FAQ

**Q: Can I use this for my production app?**
A: While this project isn’t designed for apps that scale to infinity and beyond, it can handle a decent amount of traffic. Just don’t throw a massive user base at it unless you want to watch it implode!

**Q: What if I run into issues?**
A: First, check the documentation of the individual technologies used. If you’re still stuck, feel free to open an issue. Just know that you might have to wait a while for a response—everyone’s busy shipping their own mess!

**Q: Can I contribute?**
A: Absolutely! Contributions are welcome, but please don’t break everything in the process. We’d like to keep some semblance of functionality here!

---

And there you have it! **ShipMate**: the not-so-serious tool for serious developers who want to ship fast while keeping the snark alive.

---

Happy Shipping! 🚀
