import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Heart, ThumbsUp, Award, User } from 'lucide-react';

const CustomerReviews = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Sample review data - replace with your actual API data
  const reviews = [
    {
      id: 1,
      name: "Rajesh Kumar",
      location: "Chandigarh",
      rating: 5,
      review: "Absolutely fantastic experience! The car was in perfect condition and the booking process was seamless. The staff was incredibly helpful and professional. Will definitely use this service again!",
      car: "Honda City 2022",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      date: "2 days ago",
      verified: true,
      category: "Purchase"
    },
    {
      id: 2,
      name: "Priya Sharma", 
      location: "Mohali",
      rating: 5,
      review: "I was initially hesitant about buying a car online, but this platform exceeded all my expectations. The car was exactly as described, and the delivery was prompt. Great value for money!",
      car: "Maruti Swift 2021",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      date: "1 week ago",
      verified: true,
      category: "Purchase"
    },
    {
      id: 3,
      name: "Amit Singh",
      location: "Panchkula", 
      rating: 5,
      review: "Outstanding service from start to finish! The team helped me find the perfect car within my budget. The paperwork was handled efficiently and the car was delivered right to my doorstep.",
      car: "Hyundai i20 2023",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      date: "3 days ago",
      verified: true,
      category: "Purchase"
    },
    {
      id: 4,
      name: "Neha Gupta",
      location: "Chandigarh",
      rating: 5,
      review: "Rented a car for my weekend trip and it was absolutely perfect! Clean, well-maintained, and great fuel efficiency. The customer support team was available 24/7. Highly recommended!",
      car: "Toyota Innova 2022",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      date: "5 days ago",
      verified: true,
      category: "Rental"
    },
    {
      id: 5,
      name: "Vikram Malhotra",
      location: "Mohali",
      rating: 5,
      review: "Sold my car through this platform and couldn't be happier! They got me the best price in the market and handled all the paperwork. The whole process was transparent and stress-free.",
      car: "BMW 3 Series 2020",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      date: "1 week ago",
      verified: true,
      category: "Sale"
    },
    {
      id: 6,
      name: "Srishti Patel",
      location: "Panchkula",
      rating: 5,
      review: "Amazing experience! As a first-time car buyer, I was nervous about the process. But the team guided me through every step and helped me make an informed decision. Thank you!",
      car: "Tata Nexon 2023",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      date: "4 days ago",
      verified: true,
      category: "Purchase"
    }
  ];

  const stats = [
    { label: "Happy Customers", value: "10,000+", icon: Heart },
    { label: "Average Rating", value: "4.9/5", icon: Star },
    { label: "Cars Sold", value: "5,000+", icon: Award },
    { label: "Positive Reviews", value: "98%", icon: ThumbsUp }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, reviews.length]);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
    setIsAutoPlaying(false);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
    setIsAutoPlaying(false);
  };

  const goToReview = (index) => {
    setCurrentReview(index);
    setIsAutoPlaying(false);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <Quote className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-blue-600 relative">
              Customers Say
              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-200 rounded-full transform -rotate-1"></div>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our happy customers have to say about their experience.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center transform hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Main Review Carousel */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="relative h-96 lg:h-80">
              {reviews.map((review, index) => (
                <div
                  key={review.id}
                  className={`absolute inset-0 transition-all duration-500 transform ${
                    index === currentReview
                      ? 'opacity-100 translate-x-0'
                      : index < currentReview
                      ? 'opacity-0 -translate-x-full'
                      : 'opacity-0 translate-x-full'
                  }`}
                >
                  <div className="h-full p-8 lg:p-12 flex flex-col justify-center">
                    {/* Quote Icon */}
                    <div className="mb-6">
                      <Quote className="w-12 h-12 text-blue-600 opacity-20" />
                    </div>

                    {/* Review Text */}
                    <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 italic">
                      "{review.review}"
                    </p>

                    {/* Customer Info */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <img
                            src={review.avatar}
                            alt={review.name}
                            className="w-16 h-16 rounded-full object-cover border-3 border-white shadow-lg"
                          />
                          {review.verified && (
                            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                          )}
                        </div>
                        
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-gray-900">{review.name}</h4>
                            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                              {review.category}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600">{review.location} • {review.date}</p>
                          <p className="text-sm text-gray-500">{review.car}</p>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="text-right">
                        <div className="flex items-center gap-1 mb-1">
                          {renderStars(review.rating)}
                        </div>
                        <p className="text-sm text-gray-600">{review.rating}/5 Rating</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevReview}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-all duration-200 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextReview}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-all duration-200 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToReview(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentReview
                    ? 'bg-blue-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Review Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, 6).map((review, index) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              onClick={() => goToReview(index)}
            >
              <div className="flex items-center gap-1 mb-3">
                {renderStars(review.rating)}
              </div>
              
              <p className="text-gray-700 mb-4 line-clamp-3">
                "{review.review}"
              </p>
              
              <div className="flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-medium text-gray-900 text-sm">{review.name}</h4>
                  <p className="text-xs text-gray-600">{review.location}</p>
                </div>
                {review.verified && (
                  <div className="ml-auto">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Join Our Happy Customers?
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Experience the same excellent service that thousands of customers have already enjoyed. 
              Find your perfect car today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-200 transform hover:-translate-y-1 shadow-lg">
                Browse Cars
              </button>
              <button className="px-8 py-4 bg-blue-800 text-white font-semibold rounded-xl hover:bg-blue-900 transition-all duration-200 transform hover:-translate-y-1 shadow-lg">
                Sell Your Car
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;