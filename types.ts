import React from 'react';

export type Language = 'zh' | 'en';
export type Theme = 'light' | 'dark';

export interface ServiceItem {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
}

export interface Translation {
  nav: {
    home: string;
    about: string;
    services: string;
    contact: string;
    portfolio: string;
  };
  hero: {
    greeting: string;
    role: string;
    description: string;
    cta: string;
    secondaryCta: string;
  };
  about: {
    title: string;
    content1: string;
    content2: string;
    stats: {
      projects: string;
      experience: string;
      satisfaction: string;
    }
  };
  services: {
    title: string;
    subtitle: string;
    items: {
      web: ServiceItem;
      app: ServiceItem;
      ai: ServiceItem;
      bigdata: ServiceItem;
      algo: ServiceItem;
      doc: ServiceItem;
    }
  };
  contact: {
    title: string;
    wechat: string;
    email: string;
    github: string;
  };
  chat: {
    trigger: string;
    placeholder: string;
    sending: string;
    welcome: string;
  }
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}
