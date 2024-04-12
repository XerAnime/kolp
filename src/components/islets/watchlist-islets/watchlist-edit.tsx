"use client";
import React, { useEffect } from "react";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Spinner } from "@/components/ui/spinner";
import { useToast } from "@/components/ui/use-toast";

import { Edit, Check } from "lucide-react";

interface UserMenuLabelProps {
  label: string | null | undefined;
  icon: React.ReactNode;
}

interface EditWatchListProps {
  listId: string;
  title: string;
  selectedStatus: string;
  type: string;
  iconOnly?: boolean;
}

const WatchListEdit: React.FC<EditWatchListProps> = ({
  listId,
  title,
  selectedStatus,
  type,
  iconOnly = false,
}) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const removeMutation = useMutation({
    mutationFn: (listId: string) => {
      return axios.delete(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/watchlist/${
          type === "anime" ? listId : encodeURIComponent(listId)
        }`
      );
    },
  });

  const updateMutation = useMutation({
    mutationFn: (data: { listId: string; status: string }) => {
      const { listId, status } = data;
      return axios.put(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/watchlist/${
          type === "anime" ? listId : encodeURIComponent(listId)
        }`,
        { status }
      );
    },
  });

  useEffect(() => {
    if (updateMutation.isSuccess) {
      queryClient.invalidateQueries({ queryKey: ["userWatchList"] });
      toast({
        description: `${title} updated status.`,
        variant: "orange",
      });
    }
  }, [updateMutation.isSuccess]);

  useEffect(() => {
    if (removeMutation.isSuccess) {
      toast({
        description: `${title} removed.`,
        variant: "destructive",
      });
      queryClient.invalidateQueries({ queryKey: ["userWatchList"] });
    }
  }, [removeMutation.isSuccess]);

  return (
    <>
      <Menubar className="border-0 px-0 rounded-none">
        <MenubarMenu>
          <MenubarTrigger className="px-0 py-0">
            {iconOnly ? (
              <Edit className="mr-2 h-4 w-4 cursor-pointer" strokeWidth="3px" />
            ) : (
              <Button variant="secondary">
                {updateMutation.isPending || removeMutation.isPending ? (
                  <Spinner className="mr-2" size={16} />
                ) : (
                  <Edit className="mr-2 h-4 w-4" strokeWidth="3px" />
                )}
                Edit
              </Button>
            )}
          </MenubarTrigger>
          <MenubarContent className="min-w-[8rem] bg-secondary" align="start">
            <MenubarItem
              onClick={() =>
                updateMutation.mutate({ listId, status: "Watching" })
              }
            >
              <UserMenuLabel
                label="Watching"
                icon={selectedStatus === "Watching" && <Check size={17} />}
              />
            </MenubarItem>
            <MenubarItem
              onClick={() =>
                updateMutation.mutate({ listId, status: "Completed" })
              }
            >
              <UserMenuLabel
                label="Completed"
                icon={selectedStatus === "Completed" && <Check size={17} />}
              />
            </MenubarItem>
            <MenubarItem
              onClick={() =>
                updateMutation.mutate({ listId, status: "Dropped" })
              }
            >
              <UserMenuLabel
                label="Dropped"
                icon={selectedStatus === "Dropped" && <Check size={17} />}
              />
            </MenubarItem>

            <MenubarItem
              onClick={() =>
                updateMutation.mutate({ listId, status: "On-Hold" })
              }
            >
              <UserMenuLabel
                label="On-Hold"
                icon={selectedStatus === "On-Hold" && <Check size={17} />}
              />
            </MenubarItem>
            <MenubarItem
              onClick={() =>
                updateMutation.mutate({ listId, status: "Plan to watch" })
              }
            >
              <UserMenuLabel
                label="Plan to watch"
                icon={selectedStatus === "Plan to watch" && <Check size={17} />}
              />
            </MenubarItem>
            <MenubarItem onClick={() => removeMutation.mutate(listId)}>
              <h1 className="text-red-400">Remove</h1>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </>
  );
};

const UserMenuLabel: React.FC<UserMenuLabelProps> = ({ label, icon }) => {
  return (
    <div className="flex justify-between content-center w-full">
      <h1>{label}</h1>
      {icon}
    </div>
  );
};

export default WatchListEdit;
