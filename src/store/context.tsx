import { create } from "zustand";

interface Snippet {
  name: string;
  content: string | null;
}

interface SnippedState {
  snippetsName: string[];
  selectedSnipped: Snippet | null;
  addSinippedName: (name: string) => void;
  setSnippetNames: (names: string[]) => void;
  setSelectedSnip: (snip: Snippet | null) => void;
}

interface ProjectProperties {
  productName: string | null;
  organization: string | null;
  bundleIdentify: string | null;
  projectType: string | null;
  setProjectName: (name: string) => void;
  setProjectOrganization: (org: string) => void;
  setType: (type: string) => void;
  setBundleId: (bundle: string | null) => void;
}

export const useSnippetsStore = create<SnippedState>((set) => ({
  snippetsName: [],
  selectedSnipped: null,
  addSinippedName(name) {
    return set((state: any) => ({
      snippetsName: [state.snippetsName, name],
    }));
  },
  setSnippetNames(names) {
    return set({ snippetsName: names });
  },
  setSelectedSnip(snip) {
    return set({
      selectedSnipped: snip,
    });
  },
}));

export const useProjectStore = create<ProjectProperties>((set) => ({
  productName: null,
  organization: null,
  bundleIdentify: null,
  projectType: null,
  setProjectName(name) {
    return set({ productName: name });
  },
  setType(type) {
    return set({ projectType: type });
  },
  setProjectOrganization(org) {
    return set({ organization: org });
  },
  setBundleId(bundle) {
    return set({ bundleIdentify: bundle });
  },
}));
