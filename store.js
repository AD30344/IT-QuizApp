'use strict';

const STORE = {


  questions: [

    {
      question: 'How much time would you be willing to dedicate to your new career?',
      answers: [
        '2-3 Months',
        '6 Months',
        '2 Years',
        'No matter the time period, I can dedicate my time for my new career'
      ]
    },
    {
      question: 'What interests you about the IT field?',
      answers: [
        'Designing Web Pages',
        'Fix computer issues for myself and others',
        'Security of the web',
        'How the internet works for yourself and others',
        'Cloud Technology'

      ]
      
    },
    {
      question: 'What type of IT job would best suit your goals?',
      answers: [
        "Hands-On with technology",
        "Fight cyber-crime and hackers",
        "Hands-On, but not too much",
        "Working in the Cloud",
        "Designing games and cool apps"
      ]
 
    },
    {
      question: "Which terms IT terms are you most familiar with?",
      answers: [
        "Windows 10",
        "Firewalls",
        "Cisco",
        "Amazon Web Services (AWS)",
        "Javascript, Python"
      ]
      
    },
    {
      question: "What type IT job would best suit your goals?",
      answers: [
        "Hands-On with technology",
        "Fight cyber-crime and hackers",
        "Hands-On, but not too much",
        "Working in the Cloud",
        "Designing games and cool apps"
      ],
      
      },
      {
        question: "What are your future salary expectations annually?",
        answers: [
          "$35,000-50,000",
          "$50,000-65,000",
          "$65,000-$75,000",
          "$75,000-85,000",
          "$75,000-100,000"
          ]   
    },
    {
        question: "Imagine yourself apart of the team. Which answer best suits your interest in being apart of the team?",
        answers: [
          "Help with OS and software installment and computer replacement",
          "Make sure they are able to connect to the network",
          "Make sure the site is secure from Cyber-Attacks",
          "Ensure the data is secure within the cloud",
          "Develop a program  or script that helps the team automate their processes"
          ]  
    },
    {
        question: "This is your time to shine and put those new IT skills to the test! Which tasks would you take honor in accepting?",
        answers: [
          "Upgrading the design and user experience of the company’s website",
          "Updating pc images and hardware for warranty and support purposes",
          "Adding new features to your servers in order manage the flow of data and back-ups more seamlessly",
          "Assessing and minimizing drops in our VPN (Virtual Private Network)in order to keep users more productive",
          "Protect the company’s assets and information from being accessed and compromised"
          ]  
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0,
  wrong: 0,
  right: 0
}