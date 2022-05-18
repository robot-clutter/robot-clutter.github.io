import { NextPage } from 'next';
import MainLayout from '../components/layouts/MainLayout';
import SecondaryLayout from '../components/layouts/EmptyLayout';
import { ReactElement, ReactNode } from 'react';
import { AUTHORS } from '../data/authors';

type PageWithMainLayoutType = NextPage & { layout: typeof MainLayout };

type PageWithPostLayoutType = NextPage & { layout: typeof SecondaryLayout };

type PageWithLayoutType = PageWithMainLayoutType | PageWithPostLayoutType;

export default PageWithLayoutType;

export interface LayoutInterface {
  children: ReactNode;
}

export interface AuthorInterface {
  first_name: string;
  last_name: string;
  url?: string;
}

export interface ImageInterface {
  src: 'PUBLIC_FOLDER' | 'EXTERNAL_URL';
  path: string;
  width: number;
  height: number;
  caption?: ReactElement;
  alt?: string;
}

export interface LinkInterface {
  file?: string;
  link?: string;
  alias: string;
  type: 'code' | 'documentation' | 'manuscript';
  disabled?: boolean;
  disabledText?: string;
}

export interface PublicationInterface {
  slug: string;
  title: string;
  year: string;
  journal: string;
  journal_small: string;
  abstract: string;
  authors: AUTHORS[];
  image: ImageInterface;
  videos: string[];
  code: LinkInterface[];
  bib?: string;
  is_hidden?: boolean;
  github?: string;
}
