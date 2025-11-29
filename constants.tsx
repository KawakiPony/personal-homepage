import { Translation } from './types';
import { Globe, Code, Smartphone, Brain, Database, FileText } from 'lucide-react';

export const TRANSLATIONS: Record<'zh' | 'en', Translation> = {
  zh: {
    nav: {
      home: '首页',
      about: '关于我',
      services: '服务项目',
      contact: '联系方式',
      portfolio: '作品站点',
    },
    hero: {
      greeting: 'Kawaki Pony ',
      role: '全栈开发工程师 & 毕设技术顾问',
      description: '专注计算机专业毕业设计指导，提供高质量源码、论文辅导及技术支持。让你的毕设之旅轻松愉快，顺利通关。',
      cta: '浏览服务',
      secondaryCta: '咨询 AI 助手',
    },
    about: {
      title: '关于 GradGo',
      content1: '“GradGo” 是我创立的个人工作室，致力于解决计算机专业学生在毕业设计过程中遇到的技术难题。我拥有多年的一线互联网大厂开发经验，熟悉各类主流技术栈。',
      content2: '无论是 Java Spring Boot, Python Django, Vue/React 前端，还是深度学习、大数据分析，我都能提供专业的代码实现与文档撰写指导。我的目标不仅是帮你通过毕业设计，更是让你在过程中学到真正的技术。',
      stats: {
        projects: '500+ 成功案例',
        experience: '5年+ 行业经验',
        satisfaction: '99% 好评率'
      }
    },
    services: {
      title: '核心服务',
      subtitle: '全方位的技术支持，覆盖主流开发方向',
      items: {
        web: { icon: Globe, title: 'Web 系统开发', description: '基于 SpringBoot, Vue, React 等技术的企业级管理系统、电商平台、各类信息管理系统。' },
        app: { icon: Smartphone, title: '移动应用开发', description: 'Android, iOS (Flutter/React Native) 以及微信小程序开发。' },
        ai: { icon: Brain, title: '人工智能 & 算法', description: '机器学习、深度学习、计算机视觉 (CV)、自然语言处理 (NLP) 等前沿课题。' },
        bigdata: { icon: Database, title: '大数据分析', description: 'Hadoop, Spark, Flink 数据清洗、可视化大屏展示及数据挖掘。' },
        algo: { icon: Code, title: '算法与数据结构', description: '复杂算法实现、性能优化、LeetCode 风格难题攻克。' },
        doc: { icon: FileText, title: '论文与文档', description: '专业的开题报告、任务书、毕业论文撰写指导及查重降重服务。' },
      }
    },
    contact: {
      title: '联系我',
      wechat: '微信咨询',
      email: 'QQ 联系',
      github: 'GitHub 仓库',
    },
    chat: {
      trigger: 'AI 咨询助手',
      placeholder: '输入你的问题...',
      sending: '思考中...',
      welcome: '你好！我是“GradGo”的 AI 助手。请问有什么关于毕业设计的问题可以帮您？'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      contact: 'Contact',
      portfolio: 'Showcase',
    },
    hero: {
      greeting: 'Hi, I am KawakiPony',
      role: 'Full Stack Dev & Thesis Consultant',
      description: 'Specializing in Computer Science graduation projects. Providing high-quality source code, thesis guidance, and technical support to help you ace your degree.',
      cta: 'View Services',
      secondaryCta: 'Ask AI Assistant',
    },
    about: {
      title: 'About GradGo',
      content1: '"GradGo" is my personal studio dedicated to solving technical challenges for CS students. I have years of experience in top-tier tech companies and master various tech stacks.',
      content2: 'Whether it is Java Spring Boot, Python Django, Vue/React, or Deep Learning/Big Data, I provide professional code implementation and documentation guidance. My goal is to help you learn real skills while passing your thesis.',
      stats: {
        projects: '500+ Projects',
        experience: '5+ Years Exp',
        satisfaction: '99% Satisfaction'
      }
    },
    services: {
      title: 'Our Services',
      subtitle: 'Comprehensive technical support covering mainstream development areas',
      items: {
        web: { icon: Globe, title: 'Web Development', description: 'Enterprise systems, E-commerce, CMS based on SpringBoot, Vue, React, etc.' },
        app: { icon: Smartphone, title: 'Mobile Apps', description: 'Android, iOS (Flutter/React Native) and WeChat Mini Programs.' },
        ai: { icon: Brain, title: 'AI & Algorithms', description: 'Machine Learning, Deep Learning, Computer Vision, NLP, and other cutting-edge topics.' },
        bigdata: { icon: Database, title: 'Big Data', description: 'Hadoop, Spark, Flink data cleaning, visualization dashboards, and mining.' },
        algo: { icon: Code, title: 'Algorithms', description: 'Complex algorithm implementation, optimization, and problem solving.' },
        doc: { icon: FileText, title: 'Documentation', description: 'Professional guidance for proposals, task sheets, thesis writing, and plagiarism reduction.' },
      }
    },
    contact: {
      title: 'Contact Me',
      wechat: 'WeChat',
      email: 'QQ',
      github: 'GitHub',
    },
    chat: {
      trigger: 'AI Assistant',
      placeholder: 'Ask a question...',
      sending: 'Thinking...',
      welcome: 'Hello! I am the AI assistant for "GradGo". How can I help you with your graduation project today?'
    }
  }
};
