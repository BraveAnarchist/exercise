// src/components/Section.jsx
import React from 'react';

export default function Section({ title, content,url }) {
  return (
    <section className="my-8 mx-4 p-4 bg-white rounded shadow">
      <h2 className="text-2xl mb-2">{title}</h2>
      <p>{content}</p>
      <img src={url} alt="" />
    </section>
  );
}
