import React from "react";
import { Theme } from "../element/types";
export declare const iconFillColor: (theme: Theme) => string;
type Opts = {
    width?: number;
    height?: number;
    mirror?: true;
} & React.SVGProps<SVGSVGElement>;
export declare const createIcon: (d: string | React.ReactNode, opts?: number | Opts) => JSX.Element;
export declare const PlusPromoIcon: JSX.Element;
export declare const LibraryIcon: JSX.Element;
export declare const PlusIcon: JSX.Element;
export declare const DotsIcon: JSX.Element;
export declare const PinIcon: JSX.Element;
export declare const UnlockedIcon: JSX.Element;
export declare const LockedIcon: JSX.Element;
export declare const WelcomeScreenMenuArrow: JSX.Element;
export declare const WelcomeScreenHelpArrow: JSX.Element;
export declare const WelcomeScreenTopToolbarArrow: JSX.Element;
export declare const ExcalLogo: JSX.Element;
export declare const SelectionIcon: JSX.Element;
export declare const RectangleIcon: JSX.Element;
export declare const DiamondIcon: JSX.Element;
export declare const EllipseIcon: JSX.Element;
export declare const ArrowIcon: JSX.Element;
export declare const LineIcon: JSX.Element;
export declare const PenModeIcon: JSX.Element;
export declare const FreedrawIcon: JSX.Element;
export declare const TextIcon: JSX.Element;
export declare const ImageIcon: JSX.Element;
export declare const EraserIcon: JSX.Element;
export declare const ZoomInIcon: JSX.Element;
export declare const ZoomOutIcon: JSX.Element;
export declare const TrashIcon: JSX.Element;
export declare const EmbedIcon: JSX.Element;
export declare const DuplicateIcon: JSX.Element;
export declare const MoonIcon: JSX.Element;
export declare const SunIcon: JSX.Element;
export declare const HamburgerMenuIcon: JSX.Element;
export declare const ExportIcon: JSX.Element;
export declare const HelpIcon: JSX.Element;
export declare const ExternalLinkIcon: JSX.Element;
export declare const GithubIcon: JSX.Element;
export declare const DiscordIcon: JSX.Element;
export declare const TwitterIcon: JSX.Element;
export declare const checkIcon: JSX.Element;
export declare const LinkIcon: JSX.Element;
export declare const save: JSX.Element;
export declare const saveAs: JSX.Element;
export declare const LoadIcon: JSX.Element;
export declare const clipboard: JSX.Element;
export declare const palette: JSX.Element;
export declare const ExportImageIcon: JSX.Element;
export declare const exportToFileIcon: JSX.Element;
export declare const zoomIn: JSX.Element;
export declare const zoomOut: JSX.Element;
export declare const done: JSX.Element;
export declare const menu: JSX.Element;
export declare const UndoIcon: JSX.Element;
export declare const RedoIcon: JSX.Element;
export declare const questionCircle: JSX.Element;
export declare const share: JSX.Element;
export declare const shareIOS: JSX.Element;
export declare const shareWindows: JSX.Element;
export declare const resetZoom: JSX.Element;
export declare const BringForwardIcon: JSX.Element;
export declare const SendBackwardIcon: JSX.Element;
export declare const BringToFrontIcon: JSX.Element;
export declare const SendToBackIcon: JSX.Element;
export declare const AlignTopIcon: JSX.Element;
export declare const AlignBottomIcon: JSX.Element;
export declare const AlignLeftIcon: JSX.Element;
export declare const AlignRightIcon: JSX.Element;
export declare const DistributeHorizontallyIcon: JSX.Element;
export declare const DistributeVerticallyIcon: JSX.Element;
export declare const CenterVerticallyIcon: JSX.Element;
export declare const CenterHorizontallyIcon: JSX.Element;
export declare const usersIcon: JSX.Element;
export declare const start: JSX.Element;
export declare const stop: JSX.Element;
export declare const CloseIcon: JSX.Element;
export declare const back: JSX.Element;
export declare const clone: JSX.Element;
export declare const shield: JSX.Element;
export declare const file: JSX.Element;
export declare const GroupIcon: React.MemoExoticComponent<({ theme }: {
    theme: Theme;
}) => JSX.Element>;
export declare const UngroupIcon: React.MemoExoticComponent<({ theme }: {
    theme: Theme;
}) => JSX.Element>;
export declare const FillZigZagIcon: JSX.Element;
export declare const FillHachureIcon: JSX.Element;
export declare const FillCrossHatchIcon: JSX.Element;
export declare const FillSolidIcon: JSX.Element;
export declare const StrokeWidthBaseIcon: JSX.Element;
export declare const StrokeWidthBoldIcon: JSX.Element;
export declare const StrokeWidthExtraBoldIcon: JSX.Element;
export declare const StrokeStyleSolidIcon: React.MemoExoticComponent<({ theme }: {
    theme: Theme;
}) => JSX.Element>;
export declare const StrokeStyleDashedIcon: JSX.Element;
export declare const StrokeStyleDottedIcon: JSX.Element;
export declare const SloppinessArchitectIcon: JSX.Element;
export declare const SloppinessArtistIcon: JSX.Element;
export declare const SloppinessCartoonistIcon: JSX.Element;
export declare const EdgeSharpIcon: JSX.Element;
export declare const EdgeRoundIcon: JSX.Element;
export declare const ArrowheadNoneIcon: JSX.Element;
export declare const ArrowheadArrowIcon: React.MemoExoticComponent<({ flip }: {
    flip?: boolean | undefined;
}) => JSX.Element>;
export declare const ArrowheadDotIcon: React.MemoExoticComponent<({ flip }: {
    flip?: boolean | undefined;
}) => JSX.Element>;
export declare const ArrowheadBarIcon: React.MemoExoticComponent<({ flip }: {
    flip?: boolean | undefined;
}) => JSX.Element>;
export declare const ArrowheadTriangleIcon: React.MemoExoticComponent<({ flip }: {
    flip?: boolean | undefined;
}) => JSX.Element>;
export declare const FontSizeSmallIcon: JSX.Element;
export declare const FontSizeMediumIcon: JSX.Element;
export declare const FontSizeLargeIcon: JSX.Element;
export declare const FontSizeExtraLargeIcon: JSX.Element;
export declare const FontFamilyNormalIcon: JSX.Element;
export declare const FontFamilyCodeIcon: JSX.Element;
export declare const TextAlignLeftIcon: JSX.Element;
export declare const TextAlignCenterIcon: JSX.Element;
export declare const TextAlignRightIcon: JSX.Element;
export declare const TextAlignTopIcon: React.MemoExoticComponent<({ theme }: {
    theme: Theme;
}) => JSX.Element>;
export declare const TextAlignBottomIcon: React.MemoExoticComponent<({ theme }: {
    theme: Theme;
}) => JSX.Element>;
export declare const TextAlignMiddleIcon: React.MemoExoticComponent<({ theme }: {
    theme: Theme;
}) => JSX.Element>;
export declare const publishIcon: JSX.Element;
export declare const eraser: JSX.Element;
export declare const handIcon: JSX.Element;
export declare const downloadIcon: JSX.Element;
export declare const copyIcon: JSX.Element;
export declare const helpIcon: JSX.Element;
export declare const playerPlayIcon: JSX.Element;
export declare const playerStopFilledIcon: JSX.Element;
export declare const tablerCheckIcon: JSX.Element;
export declare const alertTriangleIcon: JSX.Element;
export declare const eyeDropperIcon: JSX.Element;
export declare const extraToolsIcon: JSX.Element;
export declare const frameToolIcon: JSX.Element;
export declare const mermaidLogoIcon: JSX.Element;
export declare const ArrowRightIcon: JSX.Element;
export declare const laserPointerToolIcon: JSX.Element;
export {};
