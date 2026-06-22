import React from 'react'
import s from "./SearchModal.module.sass"

const SearchModal = ({ isOpen, onClose}) => {
    if (!isOpen) return null;
  return (
    <div className={s.modalOverlay}>
        <div className={s.modalContent}>
            <button className={s.closeButton} onClick={onClose}>
                Close
            </button>


            <div className={s.searchBox}>
                <input type="text" 
                       placeholder='Search'
                       className={s.SearchImput}
                       autoFocus
                 />
            </div>

            <div className={s.shortcuts}>
               <h3> Shortcuts</h3>
                <ul>
                    <li><a href="/sport">New Sport Watch</a></li>
                    <li><a href="/classic">New Classic Watchs</a></li>
                    <li><a href="/log in">Frequently Asked Questions</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default SearchModal