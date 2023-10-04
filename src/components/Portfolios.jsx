'use client'

import Image from 'next/image'
import { useState } from 'react'

import { Container } from '@/components/Container'
import activity6 from '@/images/portfolio/activity6.png'
import activity7 from '@/images/portfolio/activity7.png'
import activity9 from '@/images/portfolio/activity9.png'
import mobil1 from '@/images/portfolio/mobil1.png'
import mobil2 from '@/images/portfolio/mobil2.png'
import staff1 from '@/images/portfolio/staff1.png'

const portfolios = [
  {
    id: 1,
    image: activity6,
    tags: 'activity',
  },
  {
    id: 1,
    image: activity7,
    tags: 'activity',
  },
  {
    id: 1,
    image: activity9,
    tags: 'activity',
  },
  {
    id: 1,
    image: mobil1,
    tags: 'activity',
  },
  {
    id: 1,
    image: mobil2,
    tags: 'activity',
  },
  {
    id: 1,
    image: staff1,
    tags: 'staff',
  },
]

function FilterButton({ children, active, ...props }) {
  return (
    <button
      type="button"
      className={`${
        active ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'
      } relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm focus:hidden`}
      {...props}
    >
      {children}
    </button>
  )
}

export function Portfolios() {
  const [filter, setFilter] = useState('activity')

  const options = {
    tags: filter,
  };
  
  const filtered = portfolios.filter(obj => Object.keys(options).some(key => {
    if (key != "color") {
      return obj[key] == options[key];
    } else {
      return options[key].some(s => s == obj[key]);
    }
  }));
  
  console.log(filtered);

  const handleChange = (e) => {
    setFilter(e.target.value)
  }

  return (
    <section
      id="portfolios"
      aria-label="What our customers are saying"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Loved by businesses worldwide.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Our software is so simple that people can’t help but fall in love
            with it. Simplicity is easy when you just skip tons of
            mission-critical features.
          </p>
        </div>
        <div className="flex gap-2 w-full justify-center mt-12">
          <FilterButton onClick={handleChange} value="activity" active={filter === 'activity'}>
            Activity
          </FilterButton>
          <FilterButton onClick={handleChange} value="staff" active={filter === 'staff'}>
            Staff
          </FilterButton>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {filtered.map((filtered, filteredIndex) => (
            <li key={filteredIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                  <li key={filteredIndex}>
                    <figure className="relative overflow-hidden rounded-2xl bg-white shadow-xl shadow-slate-900/10">
                      <Image
                        className="w-full object-cover"
                        src={filtered.image}
                        alt=""
                        width={56}
                        height={56}
                        unoptimized
                      />
                    </figure>
                  </li>
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
