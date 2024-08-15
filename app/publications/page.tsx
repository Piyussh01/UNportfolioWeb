// components/Publications.js
import "./publications.css"
const publications = [
  {
    title: "Deep Geometric Moments Promote Shape Consistency in Text-to-3D Generation",
    authors: "Utkarsh Nath, Rajeev Goel, Eun Som Jeon, Changhoon Kim, Kyle Min, Yezhou Yang, Yingzhen Yang, Pavan Turaga",
    status: "In Review",
    conference: "WACV 2025"
  },
  {
    title: "Learning Low-Rank Feature for Thorax Disease Classification",
    authors: "Rajeev Goel, Utkarsh Nath, Yancheng Wang, AC Silva, Teresa Wu, Yingzhen Yang",
    status: "In Review",
    conference: "NeurIPS 2024"
  },
  {
    title: "Polynomial Implicit Neural Framework for Promoting Shape Awareness in Generative Models",
    authors: "Utkarsh Nath, Rajhans Singh, Ankita Singh, Kuldeep Kulkarni, Pavan Turaga",
    status: "In Minor Revision",
    conference: "International Journal of Computer Vision"
  },
  {
    title: "RNAS-CL: Robust Neural Architecture Search by Cross-Layer Knowledge Distillation",
    authors: "Utkarsh Nath, Yancheng Wang, Pavan Turaga, Yingzhen Yang",
    status: "Published",
    conference: "International Journal of Computer Vision (2024)"
  },
  {
    title: "Neural Architecture Search Finds Robust Models by Knowledge Distillation",
    authors: "Utkarsh Nath, Yancheng Wang, Yingzhen Yang",
    status: "Accepted",
    conference: "Uncertainty in Artificial Intelligence (UAI) 2024"
  },
  {
    title: "RNAS-CL: Robust Neural Architecture Search by Cross-Layer Knowledge Distillation",
    authors: "Utkarsh Nath, Yancheng Wang, Yingzhen Yang",
    status: "Presented",
    conference: "ICLR 2023 Workshop on Pitfalls of limited data and computation for Trustworthy ML"
  },
  {
    title: "Adjoined Networks: A Training Paradigm with Applications to Network Compression",
    authors: "Utkarsh Nath, Shrinu Kushagra, Yingzhen Yang",
    status: "Presented",
    conference: "AAAI Spring Symposium 2022"
  }
];

export default function Publications() {
  return (
    <div className="publications">
      <h2>Publications</h2>
      {publications.map((pub, index) => (
        <div key={index} className="publication">
          <h3>{pub.title}</h3>
          <p><strong>Authors:</strong> {pub.authors}</p>
          <p><strong>Status:</strong> {pub.status}</p>
          <p><strong>Conference/Journal:</strong> {pub.conference}</p>
        </div>
      ))}
    </div>
  );
}

