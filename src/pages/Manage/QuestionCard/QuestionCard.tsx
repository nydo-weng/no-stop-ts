interface Question {
  question: string;
  answer: string;
  tags: string[];
  createdAt: string;
}

function QuestionCard({ question, answer, tags, createdAt }: Question) {
  return (
    <article className="card bg-white border-2 rounded-lg p-4 shadow mx-4 mb-2">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{question}</h3>
      <p className="text-gray-700 mb-3">{answer}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((tag) => (
          <span key={tag} className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded-md">
            #{tag}
          </span>
        ))}
      </div>
      <time className="text-xs text-gray-500" dateTime={createdAt}>
        创建于：{new Date(createdAt).toLocaleDateString()}
      </time>
    </article>
  );
}

export default QuestionCard;
