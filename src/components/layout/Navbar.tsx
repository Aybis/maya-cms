'use client';
import {
  CardStackIcon,
  ChatBubbleIcon,
  ChevronDownIcon,
  HomeIcon,
  LinkBreak2Icon,
  MagicWandIcon,
  MixIcon,
  PersonIcon,
  ReaderIcon,
} from '@radix-ui/react-icons';

function UserProfile() {
  return (
    <div className="p-1.5 flex items-center gap-3 overflow-hidden w-full hover:bg-zinc-200/70 transition-all duration-500 rounded-lg">
      <div className="rounded-lg bg-zinc-300 flex-none flex justify-center items-center w-10 h-10">
        <h1 className="font-semibold text-3xl">M</h1>
      </div>
      <div className="flex-col gap-y-0.5 flex-1">
        <p className="font-semibold text-zinc-800 text-nowrap">Muchtar</p>
        <p className="font-light text-zinc-700 text-nowrap">Free plan</p>
      </div>
      <ChevronDownIcon className="w-6 h-6" />
    </div>
  );
}

function MenuItem({
  icon: Icon,
  label,
  extra,
}: {
  icon: React.ElementType;
  label: string;
  extra?: React.ReactNode;
}) {
  return (
    <li className="flex-1 w-full flex items-center gap-4.5 p-2 rounded-lg hover:bg-zinc-200/60 dark:hover:bg-zinc-950">
      <span>
        <Icon className="w-8 h-8 text-zinc-800 dark:text-zinc-100" />
      </span>
      <p className="font-semibold text-zinc-800 dark:text-zinc-100">{label}</p>
      {extra && <span>{extra}</span>}
    </li>
  );
}

function MenuSection({
  items,
}: {
  items: {
    icon: React.ElementType;
    label: string;
    extra?: React.ReactNode;
  }[];
}) {
  return (
    <ul className="overflow-hidden flex flex-col gap-y-4">
      {items.map((item, index) => (
        <MenuItem
          key={index}
          icon={item.icon}
          label={item.label}
          extra={item.extra}
        />
      ))}
    </ul>
  );
}

export default function Navbar() {
  return (
    <aside className="absolute ml-4 w-12 z-20 bg-white/20 dark:bg-zinc-800 backdrop-blur-sm inset-y-0 my-6 rounded-lg p-4 text-zinc-800 shadow-lg shadow-zinc-200 dark:shadow-none hover:w-48 box-content transition-all duration-500">
      <div className="flex flex-col">
        <UserProfile />
        <nav className="mt-6 overflow-hidden flex flex-col gap-y-4">
          <MenuSection
            items={[
              { icon: ChatBubbleIcon, label: 'Chatbot' },
              { icon: HomeIcon, label: 'Home' },
            ]}
          />
          <hr className="mx-1.5 border-zinc-300" />
          <MenuSection
            items={[
              { icon: PersonIcon, label: 'Agents' },
              { icon: CardStackIcon, label: 'Agent Marketplace' },
            ]}
          />
          <hr className="mx-1.5 border-zinc-300" />
          <MenuSection
            items={[
              { icon: ReaderIcon, label: 'Knowledge Base' },
              { icon: MixIcon, label: 'Models' },
              { icon: LinkBreak2Icon, label: 'Data Connectors' },
            ]}
          />
          <hr className="mx-1.5 border-zinc-300" />
          <MenuSection
            items={[
              {
                icon: MagicWandIcon,
                label: 'AI Virtual',
                extra: (
                  <span className="bg-zinc-700 text-zinc-100 rounded-full px-2 py-0.5">
                    Beta
                  </span>
                ),
              },
            ]}
          />
        </nav>
      </div>
    </aside>
  );
}
