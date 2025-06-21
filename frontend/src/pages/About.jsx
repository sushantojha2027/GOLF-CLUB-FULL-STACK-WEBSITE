/*import { Link } from "react-router-dom";
export default function About() {
  return (
   <div className="p-10 max-w-4xl mx-auto text-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-green-100 opacity-60 animate-pulse"></div>
      <div className="relative z-10">
        <h1 className="text-4xl font-bold mb-6 text-center text-green-900">About BLW Golf Club</h1>
        <p className="text-lg leading-relaxed mb-4">
          Established in the early 1960s, the BLW Golf Club is a prestigious golfing institution located in the heart of Varanasi. Built under the stewardship of the Banaras Locomotive Works (BLW), the club has been a symbol of class, sportsmanship, and community bonding for decades.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          With a lush green 9-hole golf course surrounded by scenic views and top-tier facilities, the club offers a serene and elite environment for members to unwind and connect. Whether you are a beginner or a seasoned golfer, the BLW Golf Club caters to all skill levels with regular tournaments, training programs, and social events.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Our club has been a proud host of various inter-club championships and charity golf events. Over the years, it has evolved into a community hub fostering both competitive spirit and friendships among golf lovers.
        </p>
        <div className="mt-10">
              <Link className="text-blue-500 hover: text-blue-700 underline cursor-pointer"
          to="https://blw.indianrailways.gov.in/view_section.jsp?lang=0&id=0,295,333,706" 
         
        >GO TO OFFICIAL SITE FOR MORE DETAILS</Link>
        </div>
      </div>
    </div>
  );
}*/
// src/pages/AboutUs.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-800 px-6 py-12 max-w-6xl mx-auto space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-green-800">About BLW Golf Club</h1>
        <p className="text-lg mt-2">BLW VARANASI, UTTAR PRADESH 221004</p>
        <p className="mt-4 text-gray-600 italic">
          A premier golf destination where tradition meets excellence, fostering a community of passionate golfers since our establishment.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-semibold border-b pb-1">Our History</h2>
        <p className="mt-2">
          BLW Golf Club was established as part of the Bharat Heavy Electricals Limited (BHEL) recreational facilities in Varanasi.
          What began as a modest golf course for BHEL employees has evolved into one of Uttar Pradesh's most respected golf clubs.
        </p>
        <p className="mt-2">
          Our club has been instrumental in promoting golf in the eastern region of India, providing a platform for both amateur and
          professional golfers to hone their skills and compete at various levels.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold border-b pb-1">Course Excellence</h2>
        <ul className="list-disc pl-6 mt-2">
          <li>18-hole championship course</li>
          <li>Par 72 layout design</li>
          <li>Meticulously maintained greens</li>
          <li>Water hazards and sand bunkers</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold border-b pb-1">Community</h2>
        <ul className="list-disc pl-6 mt-2">
          <li>500+ active members</li>
          <li>Monthly tournaments</li>
          <li>Junior golf programs</li>
          <li>Ladies golf section</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold border-b pb-1">Achievements</h2>
        <ul className="list-disc pl-6 mt-2">
          <li>State championship host</li>
          <li>Professional golf academy</li>
          <li>Environmental sustainability award</li>
          <li>Best maintained course 2023</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold border-b pb-1">Golf Heritage & Interesting Facts</h2>
        <h3 className="mt-2 font-semibold">Golf Origins</h3>
        <p>Golf originated in Scotland in the 15th century. The first recorded mention of golf was in 1457 when King James II of Scotland banned the game because it was distracting soldiers from archery practice.</p>
        
        <h3 className="mt-2 font-semibold">The Game Today</h3>
        <p>Modern golf is played on courses with 18 holes, each with a tee area, fairway, rough, and green with a flagstick and hole. The objective is to complete each hole in the fewest strokes possible.</p>

        <h3 className="mt-2 font-semibold">Golf in India</h3>
        <p>Golf was introduced to India by the British in the 1820s. The Royal Calcutta Golf Club, established in 1829, is the oldest golf club outside of Britain. Today, India has over 200 golf courses across the country.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold border-b pb-1">BLW Club's Contribution</h2>
        <p>Our club has produced several state-level champions and continues to nurture young talent through our comprehensive training programs. We believe golf teaches valuable life skills including patience, precision, and sportsmanship.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold border-b pb-1">Our Mission</h2>
        <p>To provide world-class golfing facilities and foster a community where members can enjoy the sport, improve their skills, and build lasting relationships in a beautiful and well-maintained environment.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold border-b pb-1">Our Vision</h2>
        <p>To be recognized as the premier golf destination in Eastern India, known for our exceptional course conditions, outstanding member experience, and commitment to promoting the sport at all levels.</p>
      </section>
      <section>
        
              <Link className="text-blue-500 hover: text-blue-700 underline cursor-pointer"
          to="https://blw.indianrailways.gov.in/view_section.jsp?lang=0&id=0,295,333,706" 
         
        >GO TO OFFICIAL SITE FOR MORE DETAILS</Link>
        
      </section>
      </div>
    
  );
};

export default AboutUs;













      