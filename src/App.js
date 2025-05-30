import { useState } from 'react';

export default function RealTalkWall() {
  const [post, setPost] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [action, setAction] = useState('');

  const handlePost = () => {
    if (post.trim().length < 10) return alert('請輸入至少10字的真心話');
    setSubmitted(true);
  };

  const handleAction = (type) => {
    setAction(type);
    const actionMap = {
      send: '匿名寄出',
      display: '公開展示',
      destroy: '永久銷毀',
    };
    alert(`你的話已被「${actionMap[type]}」處理，我們會代你完成後續流程。`);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">我終於敢說</h1>

      {!submitted ? (
        <div className="space-y-4">
          <p className="text-gray-500">說出那句你一直不敢說的話（匿名）：</p>
          <textarea
            className="w-full p-2 border rounded"
            rows={5}
            placeholder="例如：爸，其實我從來不怪你。"
            value={post}
            onChange={(e) => setPost(e.target.value)}
          />
          <button onClick={handlePost} className="w-full bg-black text-white py-2 rounded">送出（NT$30）</button>
        </div>
      ) : (
        <div className="space-y-4">
          <p className="font-semibold">你說了這句話：</p>
          <p className="bg-gray-100 p-3 rounded-md">{post}</p>
          <p className="text-sm text-gray-500">你希望我們對這句話進行什麼處理？</p>
          <div className="grid grid-cols-3 gap-2">
            <button onClick={() => handleAction('send')} className="border rounded py-1">匿名寄出</button>
            <button onClick={() => handleAction('display')} className="border rounded py-1">公開展示</button>
            <button onClick={() => handleAction('destroy')} className="bg-red-600 text-white rounded py-1">永久銷毀</button>
          </div>
        </div>
      )}
    </div>
  );
}
