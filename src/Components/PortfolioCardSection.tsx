'use client'
import { useState } from 'react'

export default function PortfolioCardSection() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedTag, setSelectedTag] = useState('All')

  const projects = [
    {
      title: '음성 채팅 시스템',
      category: '경력',
      tags: ['Unreal Engine', '서버'],
      image: '/MyDevelopePage/images/pingu.jpg',
      description: 'UDP 기반 실시간 음성 송수신 시스템',
      link: 'https://github.com/yourid/voicechat',
    },
    {
      title: 'RTS 전략 게임 데모',
      category: '개인',
      tags: ['Unity3D', '서버'],
      image: '/MyDevelopePage/images/pingu.jpg',
      description: '유닛 FSM + TCP 네트워크 기반 RTS',
      link: 'https://github.com/yourid/rts',
    },
    {
      title: 'RTS 전략 게임 데모',
      category: '개인',
      tags: ['Unity3D', '서버'],
      image: '/MyDevelopePage/images/pingu.jpg',
      description: '유닛 FSM + TCP 네트워크 기반 RTS',
      link: 'https://github.com/yourid/rts',
    },
    {
      title: 'RTS 전략 게임 데모',
      category: '개인',
      tags: ['Unity3D', '서버'],
      image: '/MyDevelopePage/images/pingu.jpg',
      description: '유닛 FSM + TCP 네트워크 기반 RTS',
      link: 'https://github.com/yourid/rts',
    },
    {
      title: 'RTS 전략 게임 데모',
      category: '개인',
      tags: ['Unity3D', '서버'],
      image: '/MyDevelopePage/images/pingu.jpg',
      description: '유닛 FSM + TCP 네트워크 기반 RTS',
      link: 'https://github.com/yourid/rts',
    },
    {
      title: 'RTS 전략 게임 데모',
      category: '개인',
      tags: ['Unity3D', '서버'],
      image: '/MyDevelopePage/images/pingu.jpg',
      description: '유닛 FSM + TCP 네트워크 기반 RTS',
      link: 'https://github.com/yourid/rts',
    },
    {
      title: 'RTS 전략 게임 데모',
      category: '개인',
      tags: ['Unity3D', '서버'],
      image: '/MyDevelopePage/images/pingu.jpg',
      description: '유닛 FSM + TCP 네트워크 기반 RTS',
      link: 'https://github.com/yourid/rts',
    },
    {
      title: 'RTS 전략 게임 데모',
      category: '개인',
      tags: ['Unity3D', '서버'],
      image: '/MyDevelopePage/images/pingu.jpg',
      description: '유닛 FSM + TCP 네트워크 기반 RTS',
      link: 'https://github.com/yourid/rts',
    },
  ]

  const filtered = projects.filter(project => {
    const matchCategory =
      selectedCategory === 'All' || project.category === selectedCategory
    const matchTag =
      selectedTag === 'All' || project.tags.includes(selectedTag)
    return matchCategory && matchTag
  })

  const categoryFilters = ['All', '경력', '개인']
  const tagFilters = ['All', 'Unreal Engine', 'Unity3D', '서버']

  return (
    <section className="mt-16 px-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">📁 포트폴리오 작업물</h2>

      {/* 필터 UI */}
      <div className="flex flex-wrap gap-3 mb-6">
        {categoryFilters.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1 rounded-full text-sm border ${selectedCategory === cat
              ? 'bg-purple-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 mb-6">
        {tagFilters.map(tag => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-3 py-1 rounded-full text-sm border ${selectedTag === tag
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* 카드 목록 */}
      <div className="grid md:grid-cols-3 gap-6">
        {filtered.map((project, idx) => (
          <a
            key={idx}
            href={project.link}
            target="_blank"
            className="border rounded-lg shadow hover:shadow-lg transition overflow-hidden"
          >
            <img src={project.image} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold text-purple-600">{project.title}</h3>
              <p className="text-sm text-gray-600">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}