import React, { useEffect, useState } from 'react';

export default function Dashboard() {
  const [d, setD] = useState<number | null>(null);

  useEffect(() => {
    const worker = new Worker(new URL('./worker.ts', import.meta.url));
    worker.onmessage = (e) => {
      setD(e.data);
      worker.terminate();
    };
    worker.postMessage('start');
  }, []);

  return <div className="text-2xl font-mono p-4">{d ?? 'Calculating...'}</div>;
}
