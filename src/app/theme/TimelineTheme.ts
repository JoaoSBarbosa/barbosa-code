export const TimelineTheme = {
    "root": {
        "direction": {
            "horizontal": "sm:flex",
            "vertical": "relative border-l border-gray-200 dark:border-gray-700"
        }
    },
    "item": {
        "root": {
            "horizontal": "relative mb-6 sm:mb-0",
            "vertical": "mb-10 ml-6"
        },
        "content": {
            "root": {
                "base": "mt-3 sm:pr-8"
            },
            "body": {
                "base": "mb-4 text-base font-normal text-gray-400 dark:text-gray-400"
            },
            "time": {
                "base": "mb-1 text-sm font-normal leading-none text-customPurple dark:text-gray-500"
            },
            "title": {
                "base": "text-lg font-semibold text-gray-300 text-customPurple dark:text-white"
            },

        },
        "point": {
            "horizontal": "flex items-center",
            "line": "hidden h-0.5 w-full bg-gray-200 dark:bg-gray-700 sm:flex",
            "marker": {
                "base": {
                    "horizontal": "absolute -left-1.5 h-3 w-3 rounded-full border border-customPurple bg-gray-200 dark:border-gray-900 dark:bg-gray-700",
                    "vertical": "absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-customPurple bg-gray-200 dark:border-gray-900 dark:bg-gray-700"
                },
                "icon": {
                    "base": "h-3 w-3 text-white dark:text-customPurple",
                    "wrapper": "absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-customPurple ring-8 ring-white dark:bg-cyan-900 dark:ring-gray-900"
                }
            },
            "vertical": ""
        }
    }
}