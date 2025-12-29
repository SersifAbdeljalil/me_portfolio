// src/data/certifications.js
import awsCertificatImage from "../pages/certificat/AWS_certificat.png";
import certifpdf from "../pages/certificat/AWS_Academy_Graduate___Cloud_Foundations___Training_Badge_Badge20251229-30-iek2wo.pdf";
export const certificationsData = [
  {
    id: 1,
    title: "AWS Academy Graduate - Cloud Foundations",
    issuer: "Amazon Web Services (AWS)",
    date: "Décembre 2024",
    credentialId: "Badge20251229",
    pdfPath: certifpdf,
    badgeImage: awsCertificatImage,
    category: "Cloud Computing",
    level: "Foundation",
    skills: [
      "AWS Cloud Fundamentals",
      "Cloud Architecture",
      "AWS IAM",
      "Amazon VPC",
      "Amazon EC2",
      "AWS Lambda",
      "Amazon S3",
      "Amazon RDS",
      "AWS Security",
      "Auto Scaling",
      "Amazon EBS",
      "Amazon EFS",
      "Amazon Glacier",
      "Amazon DynamoDB",
      "Amazon Redshift",
      "Amazon Aurora",
      "AWS Elastic Beanstalk",
      "Elastic Load Balancing",
      "Amazon CloudWatch"
    ],
    objectives: [
      "Définir le Cloud AWS et sa politique de tarification",
      "Identifier les composants de l'infrastructure mondiale AWS",
      "Décrire les mesures de sécurité et de conformité du Cloud AWS",
      "Créer un Amazon Virtual Private Cloud (VPC)",
      "Démontrer quand utiliser Amazon EC2, AWS Lambda et AWS Elastic Beanstalk",
      "Différencier Amazon S3, Amazon EBS, Amazon EFS et Amazon Glacier",
      "Démontrer quand utiliser les solutions de base de données AWS",
      "Expliquer les principes architecturaux du Cloud AWS",
      "Expliquer l'équilibrage de charge élastique et la mise à l'échelle automatique"
    ],
    description: "Formation complète sur les fondamentaux du cloud AWS. Cette certification couvre l'infrastructure mondiale AWS, les services de calcul, de stockage, de base de données, de mise en réseau et de sécurité. Elle prépare à comprendre et utiliser les services cloud AWS dans des environnements professionnels.",
    verified: true,
    verificationLink: "https://www.credly.com/go/ry6Ex687"
  }
];

// Export des catégories pour le filtre
export const certificationCategories = [
  { name: 'Tous', count: certificationsData.length },
  { name: 'Cloud Computing', count: certificationsData.filter(c => c.category === 'Cloud Computing').length },
  { name: 'Intelligence Artificielle', count: certificationsData.filter(c => c.category === 'Intelligence Artificielle').length },
  { name: 'Data Science', count: certificationsData.filter(c => c.category === 'Data Science').length },
  { name: 'Développement Web', count: certificationsData.filter(c => c.category === 'Développement Web').length }
].filter(cat => cat.count > 0);

// Export des niveaux
export const certificationLevels = [
  'Foundation',
  'Intermediate',
  'Advanced',
  'Expert'
];