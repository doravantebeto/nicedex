import React, { useEffect, useState } from 'react';
import api from '../../services/api'
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi'

import Card from '../Card'

const List = ({ favorites }) => {
  const [list, setList] = useState([''])
  const [page, setPage] = useState(0)

  useEffect(() => {

    api.get(`pokemon/?offset=${page}&limit=10`).then(res => {
      setList(res.data.results)
    })

  }, [page])

  function changePage(way) {

    if (way === '+') {
      setPage(page + 10)
    } else {
      if (way === '-' && page > 0) {
        setPage(page - 10)
      }
    }

  }
  return (
    <div className="list">

      <nav>
        <FiArrowLeft size={30} onClick={() => changePage('-')} className="arrow" />
        <h1>Showing: {page} - {page + 10}</h1>
        <FiArrowRight size={30} onClick={() => changePage('+')} className="arrow" />
      </nav>

      {list.map(item => (
        <Card
          key={item.url + item.name}
          name={item.name}
          url={item.url}
          favorites={favorites}
        />
      ))}

    </div>
  );
};

export default List;