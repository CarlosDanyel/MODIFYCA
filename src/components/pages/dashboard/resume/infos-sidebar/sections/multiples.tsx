import { Separator } from '@/components/ui/separator';
import {
  BicepsFlexed,
  BriefcaseBusiness,
  FileBadge2,
  Globe,
  GraduationCap,
  Languages,
  Share2,
} from 'lucide-react';
import React, { Fragment, useState } from 'react';
import {
  MultipleDragList,
  MultipleDragListItemData,
} from '../multiples-drag-list';
import { ManegeMultipleItemDiaplog } from '../multiples-drag-list/manege-multiple-item-dialog';

const MultiplesSections = () => {
  const [sectionTrueAdd, setsectionTrueAdd] =
    useState<MultipleDragListItemData | null>(null);
  const sectionsKeys: MultipleDragListItemData[] = [
    {
      formKey: 'socialMedias',
      title: 'Redes Sociais',
      icon: Share2,
      titleKey: 'name',
      descriptionKey: 'username',
    },
    {
      formKey: 'experiences',
      title: 'Experiências',
      icon: BriefcaseBusiness,
      titleKey: 'company',
      descriptionKey: 'position',
    },
    {
      formKey: 'educations',
      title: 'Educação',
      icon: GraduationCap,
      titleKey: 'institution',
      descriptionKey: 'degree',
    },
    {
      formKey: 'skills',
      title: 'Habilidades',
      icon: BicepsFlexed,
      titleKey: 'name',
      descriptionKey: 'description',
    },
    {
      formKey: 'languages',
      title: 'Idiomas',
      icon: Languages,
      titleKey: 'name',
      descriptionKey: 'description',
    },
    {
      formKey: 'certifications',
      title: 'Certificações',
      icon: FileBadge2,
      titleKey: 'name',
      descriptionKey: 'institution',
    },
    {
      formKey: 'projects',
      title: 'Projetos',
      icon: Globe,
      titleKey: 'name',
      descriptionKey: 'description',
    },
  ];
  return (
    <div>
      {sectionsKeys.map(section => (
        <Fragment key={`multiple-section-${section.title}`}>
          <Separator className="my-5" />
          <MultipleDragList
            data={section}
            onAdd={() => setsectionTrueAdd(section)}
            onEdit={index => {}}
          />
        </Fragment>
      ))}

      {sectionTrueAdd && (
        <ManegeMultipleItemDiaplog
          data={sectionTrueAdd}
          open={!!sectionTrueAdd}
          setOpen={value => {
            if (!value) setsectionTrueAdd(null);
          }}
        />
      )}
    </div>
  );
};

export default MultiplesSections;
