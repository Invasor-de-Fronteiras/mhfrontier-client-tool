import {
  BsFillWalletFill,
  BsSave,
  BsUpload,
} from "react-icons/bs";
import { FiRefreshCw } from "react-icons/fi";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEditor } from "./context/EditorContext";

import {
  Layout as SharedLayout,
  LayoutBody,
  LayoutNavbar,
  LayoutNavbarItem,
  LayoutNavbarItemButton,
  LayoutNavbarGroup,
  Select,
  useQuestlistEditor,
  useMhfDat
} from "ui";
import { useEffect, useMemo } from "react";
import { IconType } from "react-icons";
import { useTool } from "./context/ToolContext";

interface NavbarItem {
  name: string;
  icon: IconType;
  uri?: string;
  disabled?: boolean;
  hide?: boolean;
  onClick?: () => void;
  isSubmit?: boolean;
  type?: boolean;
}

interface NavbarGroup {
  name: string;
  options: NavbarItem[];
}

export function Layout() {
  const location = useLocation();
  const nav = useNavigate();
  const { isLoadedFile, handleSaveQuest } = useEditor();
  const { isLoadedQuestlists, questlistSubmit } = useQuestlistEditor();
  const { isLoadedDatFile, handleEncrypt, handleLoadDat, mhfdatSubmit } = useMhfDat();
  const { tool, setTool } = useTool();

  useEffect(() => {
    if (tool === 'MhfDat') {
      nav('/');
    }
  }, [tool]);

  const groups = useMemo<NavbarGroup[]>(
    () => {
      if (tool === 'MhfDat') return [
        {
          name: "File",
          options: [
            { name: "Load Mhdat", icon: BsUpload, disabled: false, isSubmit: false, onClick: handleLoadDat },
            {
              name: "Save Mhdat",
              icon: BsSave,
              isSubmit: false,
              disabled: !isLoadedDatFile,
              onClick: mhfdatSubmit
            },
            {
              name: "Encrypt Mhdat",
              icon: FiRefreshCw,
              isSubmit: false,
              disabled: !isLoadedDatFile,
              onClick: handleEncrypt
            }
          ],
        },
        {
          name: "MhfDat Editor",
          options: [
            {
              name: "Items",
              icon: BsFillWalletFill,
              disabled: !isLoadedDatFile,
              uri: "/dat/items",
            },
            {
              name: "Templates",
              icon: BsFillWalletFill,
              disabled: !isLoadedDatFile,
              uri: "/dat/template",
            },
          ]
        },
      ];

      return [];
    },
    [isLoadedFile, isLoadedDatFile, handleSaveQuest, questlistSubmit, tool, isLoadedQuestlists]
  );

  const route = useMemo(
    () =>
      groups.reduce<null | string>(
        (acc, group) => {
          if (acc) return acc;
          const option = group.options.find((option) => option.uri === location.pathname);
          return option?.name || null;
        },
        null
      ) ?? "Unknown",
    [location.pathname, groups]
  );

  const tools = useMemo(() => ([
    { value: 'MhfDat', label: 'MhfDat' },
  ]), []);

  const seletedTool = useMemo(() => tools.find(v => v.value === tool), [tools, tool]);

  return (
    <SharedLayout>
      <LayoutNavbar>
        <h4 className="px-3 font-semibold text-gray-600 dark:text-white">Tool</h4>
        <Select options={tools} className="w-full m-0 p-4" value={seletedTool} onChange={(item) => setTool(item?.value as string)} />
        {groups.map((group) => (
          <LayoutNavbarGroup name={group.name} key={group.name}>
            {group.options.filter(v => !v.hide).map((option) =>
              option.uri && !option.disabled ? (
                <Link to={option.uri} key={option.name}>
                  <LayoutNavbarItem {...option} />
                </Link>
              ) : (option.onClick || option.isSubmit) ? (
                <LayoutNavbarItemButton {...option} key={option.name} />
              ) : (
                <LayoutNavbarItem {...option} key={option.name} />
              )
            )}
          </LayoutNavbarGroup>
        ))}
      </LayoutNavbar>
      <LayoutBody title={route}>
        <Outlet />
      </LayoutBody>
    </SharedLayout>
  );
}
