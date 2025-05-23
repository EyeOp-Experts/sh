import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav aria-label="Breadcrumb" className="py-3">
      <ol className="breadcrumbs">
        <li className="flex items-center">
          <Link 
            href="/" 
            className="text-medical-primary hover:text-medical-dark transition-colors flex items-center"
          >
            <Home className="w-4 h-4" />
            <span className="sr-only">Home</span>
          </Link>
        </li>

        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="w-4 h-4 text-gray-400 mx-1" />
            {index === items.length - 1 || !item.path ? (
              <span className="text-gray-700">{item.label}</span>
            ) : (
              <Link
                href={item.path!}
                className="text-medical-primary hover:text-medical-dark transition-colors"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
