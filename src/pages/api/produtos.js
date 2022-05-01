// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json(
    [
      { id: 0, nome: 'caneta', preco: 15.45 },
      { id: 1, nome: 'guitarra', preco: 15000.45 },
      { id: 2, nome: 'caderno', preco: 7.45 },
      { id: 3, nome: 'carro', preco: 250000.45 },
      { id: 4, nome: 'mesa', preco: 150.78 },
      { id: 5, nome: 'noebook', preco: 35.45 },
    ]
  )
}
