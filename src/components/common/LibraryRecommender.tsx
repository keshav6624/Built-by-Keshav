'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export function LibraryRecommender() {
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent('Library recommendation');
    const body = encodeURIComponent(['Hi Keshav,', '', message.trim()].join('\n'));
    window.location.href = `mailto:hello@builtbykeshav.com?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="card-glass mx-auto max-w-xl text-left">
      <label htmlFor="recommendation-message" className="block text-small text-text-secondary mb-3">
        Your recommendation
      </label>
      <textarea
        id="recommendation-message"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        rows={4}
        required
        className="w-full rounded-input border border-border bg-surface px-4 py-3 text-small text-text outline-none transition-colors focus:border-accent/50"
        placeholder="Suggest a book, paper, or resource with a short reason and link (optional)."
      />
      <motion.button
        type="submit"
        whileHover={{ y: -2 }}
        transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="btn btn-secondary mt-4 !py-2.5 !px-5 !text-[13px]"
      >
        Send recommendation
      </motion.button>
    </form>
  );
}
