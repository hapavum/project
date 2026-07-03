import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import s from "./SearchModal.module.sass"

const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      setLoading(false)
      return
    }

    setLoading(true)
    const controller = new AbortController()

    const timer = setTimeout(() => {
      fetch(`http://127.0.0.1:8000/api/products/?search=${encodeURIComponent(query)}`, {
        signal: controller.signal,
      })
        .then((res) => res.json())
        .then((data) => setResults(data))
        .catch((err) => {
          if (err.name !== 'AbortError') {
            console.error('Search error:', err)
          }
        })
        .finally(() => setLoading(false))
    }, 300)

    return () => {
      clearTimeout(timer)
      controller.abort()
    }
  }, [query])

  if (!isOpen) return null

  const handleResultClick = (product) => {
    navigate(product.category === 'sport' ? '/sport' : '/classic')
    setQuery('')
    onClose()
  }

  const handleClose = () => {
    setQuery('')
    onClose()
  }

  return (
    <div className={s.modalOverlay}>
      <div className={s.modalContent}>
        <button className={s.closeButton} onClick={handleClose}>
          Close
        </button>

        <div className={s.searchBox}>
          <input
            type="text"
            placeholder="Search"
            className={s.searchInput}
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {query.trim() ? (
          <div className={s.results}>
            {loading && <p className={s.status}>Searching...</p>}

            {!loading && results.length === 0 && (
              <p className={s.status}>No watches found for "{query}"</p>
            )}

            {!loading && results.length > 0 && (
              <ul className={s.resultsList}>
                {results.map((product) => (
                  <li key={product.id} onClick={() => handleResultClick(product)}>
                    <img src={product.imgUrl} alt={product.title} />
                    <div className={s.resultInfo}>
                      <span className={s.resultTitle}>{product.title}</span>
                      <span className={s.resultCategory}>{product.category}</span>
                    </div>
                    <span className={s.resultPrice}>${Number(product.price).toLocaleString()}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ) : (
          <div className={s.shortcuts}>
            <h3>Shortcuts</h3>
            <ul>
              <li><a href="/sport">New Sport Watch</a></li>
              <li><a href="/classic">New Classic Watchs</a></li>
              <li><a href="/log in">Frequently Asked Questions</a></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchModal
