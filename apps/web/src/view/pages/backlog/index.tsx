import React, { ComponentElement, ComponentState, useEffect, useState } from 'react';
import { SplashScreen } from './components/SplashScreen';
import { Disclosure, DisclosureContent, DisclosureTrigger } from 'src/components/@composition/Disclosure';
import { Bars2Icon, ChevronDoubleDownIcon, ChevronDoubleUpIcon, ChevronDownIcon, ChevronUpDownIcon, ChevronUpIcon, UserIcon } from '@heroicons/react/24/outline';
import { Table } from 'src/components/Table';
import { Badge } from 'src/components/Badge';
import { cn } from 'src/@shared/utils';


export type IBacklogStatus = {
  uuid: string
  name: string
  theme?: "default" | "gray" | "outline" | "green" | "yellow" | "red" | "blue";
}

export type IBacklogPriority = 'hight' | 'hightest' | 'medium' | 'low' | 'lowest'

export const BacklogPriorityPresenter: Record<IBacklogPriority, string> = {
  hight: "Alta",
  hightest: "Urgente",
  medium: "Média",
  low: "Baixa",
  lowest: "Baixíssima"
}

export const IconPriorityPresenter: Record<IBacklogPriority, { Icon: React.ForwardRefExoticComponent<React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & { title?: string, titleId?: string } & React.RefAttributes<SVGSVGElement>>, className?: string }> = {
 
  hight: {
    Icon: ChevronUpIcon,
    className: "text-red-500"
  },
  hightest: {
    Icon: ChevronDoubleUpIcon,
    className: "text-red-500"
  },
  medium: {
    Icon: Bars2Icon,
    className: "text-orange-700"
  },
  low: {
    Icon: ChevronDownIcon,
    className: "text-blue-500"
  },
  lowest: {
    Icon: ChevronDoubleDownIcon,
    className: "text-blue-500"
  }
}

export type IBacklogEntity = {
  uuid: string
  code: string
  title: string
  status: IBacklogStatus
  priority: IBacklogPriority
  responsible: {
    uuid: string
    name: string
  }
}

export const BacklogPage: React.FC = () => {

  const [isLoading, setIsloading] = useState<boolean>(true);
  const [backlog] = useState<Array<IBacklogEntity>>([
    {
      uuid: "teste",
      code: "IMP-102",
      priority: "medium",
      responsible: {
        uuid: "teste",
        name: "Nathan"
      },
      status: {
        uuid: "teste",
        name: "Pendente",
        theme: "gray"
      },
      title: "Implementar backlog no projeto Fluyo"
    },
    {
      uuid: "teste",
      code: "IMP-102",
      priority: "medium",
      responsible: {
        uuid: "teste",
        name: "Nathan"
      },
      status: {
        uuid: "teste",
        name: "Pendente",
        theme: "gray"
      },
      title: "Implementar backlog no projeto Fluyo"
    },
    {
      uuid: "teste",
      code: "IMP-102",
      priority: "medium",
      responsible: {
        uuid: "teste",
        name: "Nathan"
      },
      status: {
        uuid: "teste",
        name: "Pendente",
        theme: "gray"
      },
      title: "Implementar backlog no projeto Fluyo"
    },
    {
      uuid: "teste",
      code: "IMP-102",
      priority: "medium",
      responsible: {
        uuid: "teste",
        name: "Nathan"
      },
      status: {
        uuid: "teste",
        name: "Pendente",
        theme: "gray"
      },
      title: "Implementar backlog no projeto Fluyo"
    },
    {
      uuid: "teste",
      code: "IMP-102",
      priority: "medium",
      responsible: {
        uuid: "teste",
        name: "Nathan"
      },
      status: {
        uuid: "teste",
        name: "Pendente",
        theme: "gray"
      },
      title: "Implementar backlog no projeto Fluyo"
    },
    {
      uuid: "teste",
      code: "IMP-102",
      priority: "medium",
      responsible: {
        uuid: "teste",
        name: "Nathan"
      },
      status: {
        uuid: "teste",
        name: "Pendente",
        theme: "gray"
      },
      title: "Implementar backlog no projeto Fluyo"
    },
  ])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsloading(false);
    }, 3000); // 3 segundos de splash
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='flex app-scrollbar-nested overflow-y-auto p-2 flex-col gap-8 w-full h-full'>
      <SplashScreen show={isLoading} />
      {
        !isLoading && (
          <>
            <div className='rounded-md shadow-md p-2 bg-gray-900'>
      <Disclosure
        defaultOpen
      >
        <DisclosureTrigger className="bg-transparent border-none">
          <div className='flex gap-2 text-sm items-center flex-1 w-full h-full'>
          <ChevronDownIcon className="h-4 w-4 shrink-0 group-data-[state=closed]:-rotate-90 text-gray-200 stroke-[3] transition-transform " />
          <span className='text-gray-200 text-base font-semibold'>
            Backlog
          </span>
          <span className='text-gray-400 text-base'>
            (20 items)
          </span>
          </div>
        </DisclosureTrigger>
        <DisclosureContent
          
        >
          <Table 
            rows={backlog} 
            columns={[
              {
                column: 'title',
                label: "Titulo",
                render: ({ title }) => (
                  <div className='flex flex-1 w-full'>
                    {title}
                  </div>
                )
              },
              {
                column: 'status',
                label: "Status",
                render: ({ status }) => {
                  return (
                    <Badge label={status.name} theme={status.theme} />
                  )
                }
              },
              {
                column: 'priority',
                label: "Prioridade",
                render: ({ priority }) => {
                  const priorityComponent = IconPriorityPresenter[priority];
                  return <priorityComponent.Icon className={cn("w-5 h-5", priorityComponent.className)} />
                }
              },
              {
                column: 'responsible',
                label: "Responsável",
                renderHeader: () => {
                  return (
                    <div className='flex w-full justify-center'>
                      <span>Responsável</span>
                    </div>
                  )
                },
                render: () => (
                  <div className='flex w-full justify-center'>

                  <div className='p-2 w-fit rounded-full border border-gray-700'>
                    <UserIcon className="w-5 h-5 text-gray-400" />
                  </div>
                  </div>
                )
              }
            ]} 
          />
        </DisclosureContent>
      </Disclosure>
    </div>
<div className='rounded-md shadow-md p-2 bg-gray-900'>
      <Disclosure>
        <DisclosureTrigger className="bg-transparent border-none">
          <div className='flex gap-2 text-sm items-center flex-1 w-full h-full'>
          <ChevronDownIcon className="h-4 w-4 shrink-0 group-data-[state=closed]:-rotate-90 text-gray-200 stroke-[3] transition-transform " />
          <span className='text-gray-200 text-base font-semibold'>
            Backlog
          </span>
          <span className='text-gray-400 text-base'>
            (20 items)
          </span>
          </div>
        </DisclosureTrigger>
        <DisclosureContent>
          <Table 
            rows={backlog} 
            columns={[
              {
                column: 'title',
                label: "Titulo",
                render: ({ title }) => (
                  <div className='flex flex-1 w-full'>
                    {title}
                  </div>
                )
              },
              {
                column: 'status',
                label: "Status",
                render: ({ status }) => {
                  return (
                    <Badge label={status.name} theme={status.theme} />
                  )
                }
              },
              {
                column: 'priority',
                label: "Prioridade",
                render: ({ priority }) => {
                  const priorityComponent = IconPriorityPresenter[priority];
                  return <priorityComponent.Icon className={cn("w-5 h-5", priorityComponent.className)} />
                }
              },
              {
                column: 'responsible',
                label: "Responsável",
                renderHeader: () => {
                  return (
                    <div className='flex w-full justify-center'>
                      <span>Responsável</span>
                    </div>
                  )
                },
                render: () => (
                  <div className='flex w-full justify-center'>

                  <div className='p-2 w-fit rounded-full border border-gray-700'>
                    <UserIcon className="w-5 h-5 text-gray-400" />
                  </div>
                  </div>
                )
              }
            ]} 
          />
        </DisclosureContent>
      </Disclosure>
    </div>
<div className='rounded-md shadow-md p-2 bg-gray-900'>
      <Disclosure>
        <DisclosureTrigger className="bg-transparent border-none">
          <div className='flex gap-2 text-sm items-center flex-1 w-full h-full'>
          <ChevronDownIcon className="h-4 w-4 shrink-0 group-data-[state=closed]:-rotate-90 text-gray-200 stroke-[3] transition-transform " />
          <span className='text-gray-200 text-base font-semibold'>
            Backlog
          </span>
          <span className='text-gray-400 text-base'>
            (20 items)
          </span>
          </div>
        </DisclosureTrigger>
        <DisclosureContent>
          <Table 
            rows={backlog} 
            columns={[
              {
                column: 'title',
                label: "Titulo",
                render: ({ title }) => (
                  <div className='flex flex-1 w-full'>
                    {title}
                  </div>
                )
              },
              {
                column: 'status',
                label: "Status",
                render: ({ status }) => {
                  return (
                    <Badge label={status.name} theme={status.theme} />
                  )
                }
              },
              {
                column: 'priority',
                label: "Prioridade",
                render: ({ priority }) => {
                  const priorityComponent = IconPriorityPresenter[priority];
                  return <priorityComponent.Icon className={cn("w-5 h-5", priorityComponent.className)} />
                }
              },
              {
                column: 'responsible',
                label: "Responsável",
                renderHeader: () => {
                  return (
                    <div className='flex w-full justify-center'>
                      <span>Responsável</span>
                    </div>
                  )
                },
                render: () => (
                  <div className='flex w-full justify-center'>

                  <div className='p-2 w-fit rounded-full border border-gray-700'>
                    <UserIcon className="w-5 h-5 text-gray-400" />
                  </div>
                  </div>
                )
              }
            ]} 
          />
        </DisclosureContent>
      </Disclosure>
    </div>
          </>
        )
      }
    </div>
  )
}
