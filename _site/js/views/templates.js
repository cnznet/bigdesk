/*   
 Copyright 2011-2014 Lukas Vlcek
 
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
 
 http://www.apache.org/licenses/LICENSE-2.0
 
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

var templates = {
    avgCalculationType: [
        "<form>",
        "Series: ",
        "<select id='{{id}}'>",
        "<option value='avg'>average</option>",
        "<option value='weighted' selected='selected'>weighted avg</option>",
        "</select>",
        "</form>"
    ].join(""),
    nodesViewTemplate: [
        "<div class='row'>",
        "<div class='threecol'>",
        "<p id='clusterHealth'></p>",
        "</div>",
        "<div class='ninecol last'>",
        "<p id='clusterNodes'></p>",
        "</div>",
        "</div>",
        "<div id='selectedClusterNode' class='row invisible'>",
        "<div class='twelvecol last'/>",
        "</div>"
    ].join(""),
    clusterViewTemplate: [
        "<div class='row'>",
        "<div class='threecol'>",
        "<p id='clusterHealth'></p>",
        "</div>",
        "<div class='ninecol last'>",
        "<p id='clusterNodesAllocation'></p>",
        "</div>",
        "</div>",
        "<div class='row'>",
        "<div class='twelvecol last'>",
        "<h2>Experimental cluster Pack diagram:</h2>",
        "</div>",
        "</div>",
        "<div class='row'>",
        "<div class='twelvecol last'>",
        "<p id='clusterChart'>Loading cluster chart...</p>",
        "</div>",
        "</div>"
    ].join(""),
    selectedClusterNode: {
        selectedNodeInfoTemplate: [
            "<h2>Selected node:</h2>" +
                    "Name: {{name}}",
            "ID: <code>{{nodeId}}</code>",
            "Hostname: {{host}}",
            "Elasticsearch version: {{version}}"
        ].join("<br>"),
        selectedNodeHTTPTemplate: [
            "HTTP address: {{http_address}}",
            "",
            "Bound address: {{http.bound_address}}",
            "",
            "Publish address: {{http.publish_address}}"
        ].join("<br>"),
        selectedNodeTransportTemplate: [
            "Transport address: {{transport_address}}",
            "",
            "Bound address: {{transport.bound_address}}",
            "",
            "Publish address: {{transport.publish_address}}"
        ].join("<br>"),
        jvmHeapMem: [
            "<div>Committed: <span id='jvm_heap_mem_committed'>n/a</span></div>",
            "<div>Used: <span id='jvm_heap_mem_used'>n/a</span></div>"
        ].join(""),
        jvmNonHeapMem: [
            "<div>Committed: <span id='jvm_non_heap_mem_committed'>n/a</span></div>",
            "<div>Used: <span id='jvm_non_heap_mem_used'>n/a</span></div>"
        ].join(""),
        jvmThreads: [
            "<div>Peak: <span id='jvm_threads_peak'>n/a</span></div>",
            "<div>Count: <span id='jvm_threads_count'>n/a</span></div>"
        ].join(""),
        jvmGC: [
            "<div>Total time (O/Y): <span id='jvm_gc_time'>n/a</span></div>",
            "<div>Total count (O/Y): <span id='jvm_gc_count'>n/a</span></div>"
        ].join(""),
        threadPoolSearch: [
            "<div>Queue: <span id='tp_search_queue'>n/a</span></div>",
            "<div>Peak: <span id='tp_search_peak'>n/a</span></div>",
            "<div>Count: <span id='tp_search_count'>n/a</span></div>"
        ].join(""),
        threadPoolIndex: [
            "<div>Queue: <span id='tp_index_queue'>n/a</span></div>",
            "<div>Peak: <span id='tp_index_peak'>n/a</span></div>",
            "<div>Count: <span id='tp_index_count'>n/a</span></div>"
        ].join(""),
        threadPoolBulk: [
            "<div>Queue: <span id='tp_bulk_queue'>n/a</span></div>",
            "<div>Peak: <span id='tp_bulk_peak'>n/a</span></div>",
            "<div>Count: <span id='tp_bulk_count'>n/a</span></div>"
        ].join(""),
        threadPoolRefresh: [
            "<div>Queue: <span id='tp_refresh_queue'>n/a</span></div>",
            "<div>Peak: <span id='tp_refresh_peak'>n/a</span></div>",
            "<div>Count: <span id='tp_refresh_count'>n/a</span></div>"
        ].join(""),
        fileDescriptorsTemplate: [
            "<div>Max: <span id='max_file_descriptors'>n/a</span></div>",
            "<div>Open: <span id='open_file_descriptors'>n/a</span></div>"
//        "<div>Refresh interval: {{process.refresh_interval}}ms</div>"
        ].join(""),
        process_MemTemplate: [
            "<div>Total virtual: <span id='process_mem_total_virtual'>n/a</span></div>",
            //"<div>Resident: <span id='process_mem_resident'>n/a</span></div>",
            //"<div>Share: <span id='process_mem_share'>n/a</span></div>"
        ].join(""),
        process_CPU_timeTemplate: [
            "<!--#-->",
            "<div>Total: <span id='process_cpu_time_total'>n/a</span></div>"
        ].join(""),
        /*process_CPU_pctTemplate: [
            "<div>Total: <span id='process_cpu_pct_total'>n/a</span></div>",
            "<div>Process: <span id='process_cpu_pct_process'>n/a</span></div>"
        ].join(""),*/
        osCpu: [
            "<div>Total: 100%</div>",
            "<div>Used: <span id='os_cpu_used'>n/a</span></div>",
            //"<div>Sys: <span id='os_cpu_sys'>n/a</span></div>"
        ].join(""),
        osMem: [
            "<div>Free: <span id='os_mem_free'>n/a</span></div>",
            "<div>Used: <span id='os_mem_used'>n/a</span></div>"
        ].join(""),
        osSwap: [
            "<div>Free: <span id='os_swap_free'>n/a</span></div>",
            "<div>Used: <span id='os_swap_used'>n/a</span></div>"
        ].join(""),
        osLoad: [
            //"<div>2: <span id='os_load_2'>n/a</span></div>",
            //"<div>1: <span id='os_load_1'>n/a</span></div>",
            "<div>Load Avg: <span id='os_load_0'>n/a</span></div>"
        ].join(""),
        channelsTemplate: [
            "<div>Transport: <span id='open_transport_channels'>n/a</span></div>",
            "<div>HTTP: <span id='open_http_channels'>n/a</span></div>",
            "<div>HTTP total opened: <span id='total_opened_http_channels'>na</span></div>"
        ].join(""),
        transportRxTx: [
            "<!--#-->",
            "<div>Rx: <span id='transport_rx_size'>n/a</span>, #<span id='transport_rx_count'>n/a</span></div>",
            "<div>Tx: <span id='transport_tx_size'>n/a</span>, #<span id='transport_tx_count'>n/a</span></div>"
        ].join(""),
        TDBTemplate: [
            "<svg width='100%' height='90'>" +
                    "<rect x='0' y='0' width='100%' height='100%' fill='#eee' stroke-width='1' />" +
                    "</svg>"
        ].join(""),
        jvmInfoTemplate1: [
            "VM name: {{vm_name}}",
            "VM vendor: {{vm_vendor}}",
            "VM version: {{vm_version}}"
        ].join("<br>"),
        jvmInfoTemplate2: [
            "Uptime: <span id='jvm_uptime'>n/a</span>",
            "Java version: {{version}}",
            "PID: {{pid}}"
        ].join("<br>"),
        osInfoTemplate1: [
            "Refresh Interval: {{#os.refresh_interval_in_millis}}{{os.refresh_interval_in_millis}} ms{{/os.refresh_interval_in_millis}}{{^os.refresh_interval_in_millis}}n/a{{/os.refresh_interval_in_millis}}",
            "Name: {{#os.name}}{{os.name}}{{/os.name}}{{^os.name}}n/a{{/os.name}}",
            "JVM Architecture: {{#os.arch}}{{os.arch}}{{/os.arch}}{{^os.arch}}n/a{{/os.arch}}",
            "Version: {{#os.version}}{{os.version}}{{/os.version}}{{^os.version}}n/a{{/os.version}}",
            "Processors: {{#os.available_processors}}{{os.available_processors}}{{/os.available_processors}}{{^os.available_processors}}n/a{{/os.available_processors}}",
            "Process-mlockall: {{#process.mlockall}}true{{/process.mlockall}}{{^process.mlockall}}false{{/process.mlockall}}"
        ].join("<br>"),
        /*osInfoTemplate2: [
         "Uptime: <span id='os_uptime'>n/a</span>",
         "Refresh interval: {{refresh_interval}}ms",
         "Total mem: {{#mem.total}}{{mem.total}} ({{mem.total_in_bytes}}&nbsp;b){{/mem.total}}{{^mem.total}}n/a{{/mem.total}}",
         "Total swap: {{#swap.total}}{{swap.total}} ({{swap.total_in_bytes}}&nbsp;b){{/swap.total}}{{^swap.total}}n/a{{/swap.total}}"
         ].join("<br>"),*/

        indices1Template1: [
            "Docs count: <span id='indices_docs_count'>n/a</span>",
            "Docs deleted: <span id='indices_docs_deleted'>n/a</span>"
        ].join("<br>"),
        indices1Template2: [
            "Flush: <span id='indices_flush_total'>n/a</span>",
            "Refresh: <span id='indices_refresh_total'>n/a</span>"
        ].join("<br>"),
        indices1Template3: [
            "Size: <span id='indices_store_size'>n/a</span>"//,
                    //"Filter cache size: <span id='indices_cache_filter_size'>n/a</span>"
        ].join("<br>"),
        indicesSearchReqsTemplate: [
            "Query: <span id='indices_search_query_reqs'>n/a</span>",
            "Fetch: <span id='indices_search_fetch_reqs'>n/a</span>"
        ].join("<br>"),
        indicesSearchTimeTemplate: [
            "Query: <span id='indices_search_query_time'>n/a</span>",
            "Fetch: <span id='indices_search_fetch_time'>n/a</span>"
        ].join("<br>"),
        indicesGetReqsTemplate: [
            "Get: <span id='indices_get_reqs'>n/a</span>",
            "Exists: <span id='indices_exists_reqs'>n/a</span>",
            "Missing: <span id='indices_missing_reqs'>n/a</span>"
        ].join("<br>"),
        indicesGetTimeTemplate: [
            "Get: <span id='indices_get_time'>n/a</span>",
            "Exists: <span id='indices_exists_time'>n/a</span>",
            "Missing: <span id='indices_missing_time'>n/a</span>"
        ].join("<br>"),
        indicesCacheSizeTemplate: [
            "Request: <span id='indices_request_cache_size'>n/a</span>",
            "Query: <span id='indices_query_cache_size'>n/a</span>",
            "Field: <span id='indices_field_cache_size'>n/a</span>"
        ].join("<br>"),
        indicesCacheEvictionsTemplate: [
            "Request: <span id='indices_request_cache_evictions'>n/a</span>",
            "Query: <span id='indices_query_cache_evictions'>n/a</span>",
            "Field: <span id='indices_field_cache_evictions'>n/a</span>"
        ].join("<br>"),
        indicesIndexingReqsTemplate: [
            "Delete: <span id='indices_indexing_delete_reqs'>n/a</span>",
            "Index: <span id='indices_indexing_index_reqs'>n/a</span>"
        ].join("<br>"),
        indicesIndexingTimeTemplate: [
            "Delete: <span id='indices_indexing_delete_time'>n/a</span>",
            "Index: <span id='indices_indexing_index_time'>n/a</span>"
        ].join("<br>"),
        fsDataInfoTemplate: [
            "<div>Type: {{#type}}<span class='pre'>{{type}}</span>{{/type}}{{^type}}n/a{{/type}}</div>",
            "<div>Mount: {{#mount}}<span class='pre'>{{mount}}</span>{{/mount}}{{^mount}}n/a{{/mount}}</div>",
            "<div>Path: <span class='pre'>{{path}}</span></div>",
            "<div>Free: <span id='fs_disk_free_{{key}}'>{{free}}</span></div>",
            "<div>Available: <span id='fs_disk_available_{{key}}'>{{available}}</span></div>",
            "<div>Total: {{total}}</div>"
        ].join(""),
        fsDataInfo_cntTemplate: [
            "<div>Total: <span id='fs_store_total_{{key}}'>n/a</span></div>",
            "<div>Free: <span id='fs_store_free_{{key}}'>n/a</span></div>",
            "<div>Available: <span id='fs_store_available_{{key}}'>n/a</span></div>"
        ].join(""),
        /*fsDataInfo_sizeTemplate: [
            "<div>Write: <span id='fs_disk_write_size_{{key}}'>n/a</span></div>",
            "<div>Read: <span id='fs_disk_read_size_{{key}}'>n/a</span></div>"
        ].join("")*/

    }

};