"use client";

import React, { useState } from 'react';
import Button from './Button';
import { twMerge } from 'tailwind-merge';

/**
 * TabButtons component for creating a group of tab buttons
 * @param {Object} props - Component props
 * @param {Array<{ id: string, label: string }>} props.tabs - Array of tab objects
 * @param {function} props.onTabChange - Callback function when tab changes
 * @param {string|null} props.activeTabId - ID of the active tab (null means no active tab)
 * @param {string} props.className - Additional classes
 */
export default function TabButtons({
  tabs = [],
  onTabChange,
  activeTabId,
  className = '',
}) {
  // Use internal state if activeTabId is undefined (uncontrolled component)
  const [internalActiveTab, setInternalActiveTab] = useState(tabs[0]?.id || '');

  // Handle tab click
  const handleTabClick = (tabId) => {
    // For uncontrolled mode
    if (activeTabId === undefined) {
      setInternalActiveTab(tabId);
    }

    // Always call the callback if provided
    if (onTabChange) {
      onTabChange(tabId);
    }
  };

  // Use controlled or uncontrolled active tab ID
  // activeTabId could be null (meaning no active tab)
  const currentActiveTab = activeTabId !== undefined ? activeTabId : internalActiveTab;

  return (
    <div className={twMerge('flex flex-row justify-center align-center gap-1 md:gap-2 mx-8', className)}>
      {tabs.map((tab) => (
        <Button
          key={tab.id}
          variant="tab"
          active={currentActiveTab === tab.id}
          onClick={() => handleTabClick(tab.id)}
          aria-pressed={currentActiveTab === tab.id}
          role="tab"
          aria-controls={`panel-${tab.id}`}
        >
          {tab.label}
        </Button>
      ))}
    </div>
  );
}