import QuestionCard from './QuestionCard';

const data = [
  {
    id: 1,
    question: '什么是闭包？',
    answer: '闭包是函数与其词法作用域的组合，允许函数在定义时访问外部作用域中的变量。',
    tags: ['JavaScript', '函数', '作用域'],
    createdAt: '2025-10-13T12:00:00Z',
    reviewCount: 3,
    lastReviewed: '2025-10-13T15:30:00Z',
  },
  {
    id: 2,
    question: 'React 中 useEffect 有什么作用？',
    answer: 'useEffect 用于在函数组件中执行副作用操作，如数据请求、DOM 操作或订阅。',
    tags: ['React', 'Hooks', '副作用'],
    createdAt: '2025-10-13T13:10:00Z',
    reviewCount: 2,
    lastReviewed: '2025-10-14T09:00:00Z',
  },
  {
    id: 3,
    question: 'var、let 和 const 的区别是什么？',
    answer:
      'var 有函数作用域且会提升，let 和 const 有块级作用域，其中 const 声明的变量不可重新赋值。',
    tags: ['JavaScript', '变量声明', '作用域'],
    createdAt: '2025-10-12T09:30:00Z',
    reviewCount: 5,
    lastReviewed: '2025-10-15T10:00:00Z',
  },
  {
    id: 4,
    question: '什么是虚拟 DOM？',
    answer:
      '虚拟 DOM 是 React 用于提高性能的机制，它在内存中维护一个虚拟节点树，用于最小化真实 DOM 的更新。',
    tags: ['React', '性能优化', 'DOM'],
    createdAt: '2025-10-10T08:00:00Z',
    reviewCount: 4,
    lastReviewed: '2025-10-14T16:00:00Z',
  },
  {
    id: 5,
    question: '什么是原型链？',
    answer: '原型链是 JavaScript 实现继承的机制，对象可以通过原型链访问其他对象的属性和方法。',
    tags: ['JavaScript', '原型', '继承'],
    createdAt: '2025-10-11T14:20:00Z',
    reviewCount: 6,
    lastReviewed: '2025-10-15T09:40:00Z',
  },
  {
    id: 6,
    question: '什么是 Promise？',
    answer: 'Promise 是用于处理异步操作的对象，表示一个未来可能完成或拒绝的值。',
    tags: ['JavaScript', '异步', 'Promise'],
    createdAt: '2025-10-13T11:00:00Z',
    reviewCount: 3,
    lastReviewed: '2025-10-15T12:30:00Z',
  },
  {
    id: 7,
    question: 'React 中的状态提升是什么？',
    answer: '状态提升指将多个组件共享的 state 提升到它们的共同父组件中，以便统一管理和传递。',
    tags: ['React', '状态管理', '组件通信'],
    createdAt: '2025-10-14T07:15:00Z',
    reviewCount: 1,
    lastReviewed: '2025-10-14T10:00:00Z',
  },
  {
    id: 8,
    question: '什么是事件循环（Event Loop）？',
    answer: '事件循环是 JavaScript 的运行机制，用于协调同步和异步任务的执行顺序。',
    tags: ['JavaScript', '事件循环', '异步'],
    createdAt: '2025-10-09T10:00:00Z',
    reviewCount: 7,
    lastReviewed: '2025-10-15T11:50:00Z',
  },
];

function Manage() {
  return (
    <div className="w-full h-full bg-[#F3F6F0] flex flex-col overflow-hidden">
      <h2 className="text-3xl font-bold text-center text-[#2D3748] border-2 p-2 m-2">
        添加, 删除, 编辑或搜索特定问题
      </h2>
      <div className="question-container flex flex-col w-full flex-1 min-h-0 bg-[#F3F6F0] overflow-auto">
        {data.map((item) => (
          <QuestionCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
export default Manage;
