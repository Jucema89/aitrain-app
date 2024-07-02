export interface DropzoneFiles {
    files:File[]
    remove: Function
}
export default function DropzoneFile(dropFiles: DropzoneFiles){

      /**
     * Transform bytes to Kb or Mb
     * @param size - size file in bytes. 
     * @returns Strind with data in KB o MB.
     */
    function formatFileSize(size: number): string {
        const kb = size / 1024;
        const mb = kb / 1024;

        if (mb >= 1) {
        return `${mb.toFixed(2)} MB`;
        } else {
        return `${kb.toFixed(2)} KB`;
        }
    }

    if(dropFiles.files.length){
        return(
            <div className="p-4 md:p-5 space-y-7">
            {
                dropFiles.files.map((file, i) => (
                <div key={i} className={i > 0 ? 'border-t-2 border-gray-200' : ''}> 
                    <div className="mt-4 flex justify-between items-center">
                    <div className="flex items-center gap-x-3">
                        <span className="size-8 flex justify-center items-center border border-gray-200 text-gray-500 rounded-lg dark:border-neutral-700 dark:text-neutral-500">
                        <svg className="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="17 8 12 3 7 8"></polyline>
                            <line x1="12" x2="12" y1="3" y2="15"></line>
                        </svg>
                        </span>
                        <div>
                        <p className="text-sm font-medium text-gray-800 dark:text-white">
                            {file.name }
                        </p>
                        <p className="text-xs text-gray-500 dark:text-neutral-500">
                            { formatFileSize(file.size) }
                        </p>
                        </div>
                    </div>
                    <div className="inline-flex items-center gap-x-2">
                        <svg className="flex-shrink-0 size-4 text-teal-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                        </svg>
                        <a className="text-gray-500 hover:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200" onClick={ () => dropFiles.remove(i)} >
                        <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M3 6h18"></path>
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                            <line x1="10" x2="10" y1="11" y2="17"></line>
                            <line x1="14" x2="14" y1="11" y2="17"></line>
                        </svg>
                        </a>
                    </div>
                    </div>
                </div>
                ))
            }
            </div>
        )
    }
}