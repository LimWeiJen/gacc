"use client";

import { useState, useEffect, useRef } from 'react';
import { searchIndex } from '@/lib/searchIndex';
import Link from 'next/link';
import { FaTimes, FaSearch } from 'react-icons/fa';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const results = searchIndex.filter(page => 
    page.content.toLowerCase().includes(query.toLowerCase()) || 
    page.title.toLowerCase().includes(query.toLowerCase())
  );

  const getSnippet = (text: string, query: string) => {
    if (!query) return null;
    const lowerText = text.toLowerCase();
    const lowerQuery = query.toLowerCase();
    const index = lowerText.indexOf(lowerQuery);
    
    if (index === -1) return text.substring(0, 100) + '...';
    
    const start = Math.max(0, index - 40);
    const end = Math.min(text.length, index + query.length + 40);
    
    const prefix = start > 0 ? '...' : '';
    const suffix = end < text.length ? '...' : '';
    
    const before = text.substring(start, index);
    const match = text.substring(index, index + query.length);
    const after = text.substring(index + query.length, end);
    
    return (
      <span className="text-gray-300">
        {prefix}{before}
        <strong className="text-gold bg-gold/10 px-1 rounded">{match}</strong>
        {after}{suffix}
      </span>
    );
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex flex-col items-center pt-24 px-4 sm:px-6">
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 md:top-10 md:right-12 text-white hover:text-gold text-4xl transition-colors"
      >
        <FaTimes />
      </button>

      <div className="w-full max-w-3xl flex flex-col gap-8">
        {/* Search Bar */}
        <div className="relative w-full border-b-2 border-gold/50 flex items-center py-4">
          <FaSearch className="text-gold text-3xl mr-4" />
          <input 
            ref={inputRef}
            type="text" 
            placeholder="Search the 28th GACC..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-white text-2xl md:text-4xl font-main-title placeholder:text-white/30 focus:outline-none"
          />
        </div>

        {/* Results List */}
        <div className="flex flex-col gap-4 overflow-y-auto max-h-[60vh] custom-scrollbar pb-12">
          {query.length > 1 ? (
            results.length > 0 ? (
              results.map((page, i) => (
                <Link 
                  href={page.route} 
                  key={i}
                  onClick={onClose}
                  className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-gold hover:bg-white/10 transition-all group"
                >
                  <h3 className="text-gold font-main-title text-2xl font-bold mb-2 group-hover:tracking-wider transition-all">
                    {page.title}
                  </h3>
                  <p className="font-content text-sm md:text-base leading-relaxed">
                    {getSnippet(page.content, query) || page.content.substring(0, 100) + '...'}
                  </p>
                </Link>
              ))
            ) : (
              <p className="text-white/50 font-content text-xl text-center mt-12">
                No results found for "<span className="text-gold">{query}</span>"
              </p>
            )
          ) : (
            <p className="text-white/30 font-content text-xl text-center mt-12">
              Start typing to search across the website...
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
