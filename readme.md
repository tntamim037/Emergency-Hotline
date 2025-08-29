1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById - - নির্দিষ্ট কোনো কিছু তে change করতে চাইলে getElementById ("idName")ব্যবহার করা হয়। এটি নির্দিষ্ট id তে দেওয়া একটি element কে খুঁজে বের করে।শুধুমাত্র একটি element return করে।
 
getElementsByClassName - - একের অধিক কোনো কিছু তে change করতে চাইলে getElementsByClassName("className") ব্যবহার করা হয়।এটি নির্দিষ্ট class এ দেওয়া সব element কে খুঁজে বের করে। একটি HTMLCollection return করে

querySelectorAll - - যেকোনো CSS selector দিয়ে সব element বাছাই করতে দেয়।এটি একটি NodeList দিবে।সেখানে একাধিক উপাদান থাকতে পারে।

querySelector - - যেকোনো CSS selector দিয়ে element বাছাই করতে দেয়।এটি শুধুমাত্র প্রথম উপাদান  দিবে।



2.How do you create and insert a new element into the DOM?

DOM এ নতুন এলিমেন্ট তৈরি করতে প্রথমে document.createElement() দিয়ে এলিমেন্ট বানাতে হবে। তারপর textContent বা innerHTML দিয়ে তার ভিতরে কনটেন্ট রাখ্ব। শেষে appendChild() বা parent এর ভিতরে অন্য কোনো মেথড দিয়ে এটিকে বসাব।

3.What is Event Bubbling and how does it work?


ইভেন্ট বাবলিং হলো এমন একটি প্রক্রিয়া যেখানে কোনো ইলিমেন্টে ইভেন্ট ঘটলে তা প্রথমে উক্ত এলিমেন্টে কার্যকর হয় এবং পরে তার প্যারেন্ট এলিমেন্টগুলিতে ধাপে ধাপে চলে যায়।
মনে করি,
একটি button আছে div এর মধ্যে।

button এ ক্লিক করলে প্রথমে button এর ইভেন্ট কাজ করবে।

এরপর ইভেন্ট div এ যাবে, তারপর body বা অন্য parent এ যাবে।

4.What is Event Delegation in JavaScript? Why is it useful?


ইভেন্ট ডেলিগেশন হলো একটি কৌশল যেখানে আমরা একটি parent এলিমেন্টে ইভেন্ট লিসেনার লাগাই, এবং সেই parent এর child এলিমেন্টগুলোতে ঘটানো ইভেন্টও handle করি।

 এটি useful কারন:

কম কোড লাগে, প্রতিটি child এর জন্য আলাদা ইভেন্ট লিসেনার লাগাতে হয় না।
মেমরি সেভ করে

5.What is the difference between preventDefault() and stopPropagation() methods?


preventDefault() – ইভেন্টের ডিফল্ট আচরণ বন্ধ করে। যেমন, লিঙ্ক ক্লিক করলে  ফর্ম সাবমিট না হওয়া।

stopPropagation() – ইভেন্টকে parent বা অন্য এলিমেন্টে ছড়াতে (bubble) না দেয়। যেমন, button ক্লিক হলে parent div এ ইভেন্ট পৌঁছানো বন্ধ।

