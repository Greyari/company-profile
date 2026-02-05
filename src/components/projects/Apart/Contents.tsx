import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import InnovativeSolutions from "./CardSection";
import { useTranslations } from "next-intl";

export default function Contents() {
  const t = useTranslations("projects2.apartment");
  return (
    <section id="who-we-are" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gap-12 items-center">
          <div>
            <h2 className="text-xl md:text-2xl font-medium tracking-tight text-gray-900 mb-6">
              {t("title")}
            </h2>
            <p className="text-gray-600 mb-4 text-justify leading-relaxed">
              {t("p1")}
            </p>

            <p className="text-gray-600 mb-4 text-justify leading-relaxed">
              {t("p2")}
            </p>

            <p className="text-gray-600 text-justify leading-relaxed">
              {t("p3")}
            </p>
          </div>
        </div>
      </div>
      <InnovativeSolutions />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gap-12 items-center">
          <div>
            <h2 className="text-xl md:text-2xl font-medium tracking-tight text-gray-900 mb-6">
              {t("titleSection2")}
            </h2>
            <p className="text-gray-600 mb-4 text-justify leading-relaxed">
              {t("p4")}
            </p>

            <p className="text-gray-600 mb-4 text-justify leading-relaxed">
              {t("p5")}
            </p>

            <p className="text-gray-600 text-justify leading-relaxed">
              {t("p6")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
