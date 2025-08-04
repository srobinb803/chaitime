'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="icon" 
          className="h-12 w-12 border-3 border-primary bg-panel-base hover:bg-panel-highlight cursor-pointer"
        >
          {/* Icons are now swapped to match the new theme logic */}
          <Sun className="absolute h-6 w-6 rotate-90 scale-0 text-primary transition-all dark:rotate-0 dark:scale-100" />

          <Moon className="h-6 w-6 rotate-0 scale-100 text-primary transition-all dark:-rotate-90 dark:scale-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="border-3 border-primary bg-panel-base font-body text-primary shadow-lg "
      >
        {/* Labels are updated for clarity */}
        <DropdownMenuItem 
          onClick={() => setTheme('light')}
          className="font-bold focus:bg-panel-highlight focus:text-primary cursor-pointer"
        >
          Paper (Light)
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme('dark')}
          className="font-bold focus:bg-panel-highlight focus:text-primary cursor-pointer"
        >
          Ink (Dark)
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme('system')}
          className="font-bold focus:bg-panel-highlight focus:text-primary cursor-pointer"
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}