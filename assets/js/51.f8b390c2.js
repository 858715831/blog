(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{380:function(a,s,t){"use strict";t.r(s);var v=t(4),_=Object(v.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("blockquote",[s("p",[a._v("笔记来源："),s("a",{attrs:{href:"https://www.bilibili.com/video/BV1PJ411n7xZ",title:"尚硅谷JVM全套教程，百万播放，全网巅峰（宋红康详解java虚拟机）",target:"_blank",rel:"noopener noreferrer"}},[a._v("尚硅谷 JVM 全套教程，百万播放，全网巅峰（宋红康详解 java 虚拟机）"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("同步更新：https://gitee.com/vectorx/NOTE_JVM")]),a._v(" "),s("p",[a._v("https://codechina.csdn.net/qq_35925558/NOTE_JVM")]),a._v(" "),s("p",[a._v("https://github.com/uxiahnan/NOTE_JVM")])]),a._v(" "),s("p",[a._v("[toc]")]),a._v(" "),s("h1",{attrs:{id:"_2-类加载子系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-类加载子系统"}},[a._v("#")]),a._v(" 2. 类加载子系统")]),a._v(" "),s("h2",{attrs:{id:"_2-1-内存结构概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-内存结构概述"}},[a._v("#")]),a._v(" 2.1. 内存结构概述")]),a._v(" "),s("ul",[s("li",[a._v("Class 文件")]),a._v(" "),s("li",[s("mark",[a._v("类加载子系统")])]),a._v(" "),s("li",[a._v("运行时数据区\n"),s("ul",[s("li",[a._v("方法区")]),a._v(" "),s("li",[a._v("堆")]),a._v(" "),s("li",[a._v("程序计数器")]),a._v(" "),s("li",[a._v("虚拟机栈")]),a._v(" "),s("li",[a._v("本地方法栈")])])]),a._v(" "),s("li",[a._v("执行引擎")]),a._v(" "),s("li",[a._v("本地方法接口")]),a._v(" "),s("li",[a._v("本地方法库")])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/e4bc9ed374db7f35e68f23f4813205bd.png",alt:"image-20200705080719531"}})]),a._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/5f06cd7e27506a91940c7b87e01d0b46.png",alt:"image-20200705080911284"}})]),a._v(" "),s("p",[a._v("如果自己想手写一个 Java 虚拟机的话，主要考虑哪些结构呢？")]),a._v(" "),s("ul",[s("li",[a._v("类加载器")]),a._v(" "),s("li",[a._v("执行引擎")])]),a._v(" "),s("h2",{attrs:{id:"_2-2-类加载器与类的加载过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-类加载器与类的加载过程"}},[a._v("#")]),a._v(" 2.2. 类加载器与类的加载过程")]),a._v(" "),s("p",[s("strong",[a._v("类加载器子系统作用")])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/3569bfb903e80b66ee7e972a6b4a5036.png",alt:"image-20200705081813409"}})]),a._v(" "),s("ul",[s("li",[a._v("类加载器子系统负责从文件系统或者网络中加载 Class 文件，class 文件在文件开头有特定的文件标识。")]),a._v(" "),s("li",[a._v("ClassLoader 只负责 class 文件的加载，至于它是否可以运行，则由 Execution Engine 决定。")]),a._v(" "),s("li",[a._v("加载的类信息存放于一块称为方法区的内存空间。除了类的信息外，方法区中还会存放运行时常量池信息，可能还包括字符串字面量和数字常量（这部分常量信息是 Class 文件中常量池部分的内存映射）")])]),a._v(" "),s("p",[s("strong",[a._v("类加载器 ClasLoader 角色")])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/e8172076eaa7a152408633a353f06b2c.png",alt:"image-20200705081913538"}})]),a._v(" "),s("ul",[s("li",[a._v("class file 存在于本地硬盘上，可以理解为设计师画在纸上的模板，而最终这个模板在执行的时候是要加载到 JVM 当中来根据这个文件实例化出 n 个一模一样的实例。")]),a._v(" "),s("li",[a._v("class file 加载到 JVM 中，被称为 DNA 元数据模板，放在方法区。")]),a._v(" "),s("li",[a._v("在.class 文件->JVM->最终成为元数据模板，此过程就要一个运输工具（类装载器 Class Loader），扮演一个快递员的角色。")])]),a._v(" "),s("p",[s("strong",[a._v("类的加载过程")])]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n *示例代码\n */")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("HelloLoader")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Hello World!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("p",[a._v("用流程图表示上述示例代码：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/8cc54647114c456695ac352336c74600.png",alt:"image-20200705082255746"}})]),a._v(" "),s("h3",{attrs:{id:"加载阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加载阶段"}},[a._v("#")]),a._v(" 加载阶段")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/a9497a1eeb7fae3022846b509186fdcd.png",alt:"image-20200705082601441"}})]),a._v(" "),s("ul",[s("li",[s("ol",[s("li",[a._v("通过一个类的全限定名获取定义此类的二进制字节流")])])]),a._v(" "),s("li",[s("ol",{attrs:{start:"2"}},[s("li",[a._v("将这个字节流所代表的静态存储结构转化为方法区的运行时数据结构")])])]),a._v(" "),s("li",[s("ol",{attrs:{start:"3"}},[s("li",[a._v("在内存中生成一个代表这个类的 java.lang.Class 对象，作为方法区这个类的各种数据的访问入口")])])])]),a._v(" "),s("p",[s("strong",[a._v("补充：加载 class 文件的方式")])]),a._v(" "),s("ul",[s("li",[a._v("从"),s("mark",[a._v("本地系统")]),a._v("中直接加载")]),a._v(" "),s("li",[a._v("通过"),s("mark",[a._v("网络")]),a._v("获取，典型场景：Web Applet")]),a._v(" "),s("li",[a._v("从 zip"),s("mark",[a._v("压缩包")]),a._v("中读取，成为日后 jar、war 格式的基础")]),a._v(" "),s("li",[a._v("运行时计算生成，使用最多的是："),s("mark",[a._v("动态代理技术")])]),a._v(" "),s("li",[a._v("由其他文件生成，典型场景："),s("mark",[a._v("JSP 应用")])]),a._v(" "),s("li",[a._v("从专有"),s("mark",[a._v("数据库")]),a._v("中提取.class 文件，比较少见")]),a._v(" "),s("li",[a._v("从"),s("mark",[a._v("加密文件")]),a._v("中获取，典型的防 Class 文件被反编译的保护措施")])]),a._v(" "),s("h3",{attrs:{id:"链接阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#链接阶段"}},[a._v("#")]),a._v(" 链接阶段")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("验证（Verify）")]),a._v("：\n"),s("ul",[s("li",[a._v("目的在子确保 Class 文件的字节流中包含信息符合当前虚拟机要求，保证被加载类的正确性，不会危害虚拟机自身安全。")]),a._v(" "),s("li",[a._v("主要包括四种验证，"),s("mark",[a._v("文件格式验证，元数据验证，字节码验证，符号引用验证。")])])])]),a._v(" "),s("li",[s("strong",[a._v("准备（Prepare）")]),a._v("：\n"),s("ul",[s("li",[a._v("为类变量分配内存并且设置该类变量的默认初始值，即零值。")]),a._v(" "),s("li",[s("mark",[a._v("这里不包含用 final 修饰的 static，因为 final 在编译的时候就会分配了，准备阶段会显式初始化；")])]),a._v(" "),s("li",[s("mark",[a._v("这里不会为实例变量分配初始化")]),a._v("，类变量会分配在方法区中，而实例变量是会随着对象一起分配到 Java 堆中。")])])]),a._v(" "),s("li",[s("strong",[a._v("解析（Resolve）")]),a._v("：\n"),s("ul",[s("li",[a._v("将常量池内的"),s("mark",[a._v("符号引用转换为直接引用")]),a._v("的过程。")]),a._v(" "),s("li",[a._v("事实上，解析操作往往会伴随着 JVM 在执行完初始化之后再执行。")]),a._v(" "),s("li",[a._v("符号引用就是一组符号来描述所引用的目标。符号引用的字面量形式明确定义在《java 虚拟机规范》的 Class 文件格式中。直接引用就是直接指向目标的指针、相对偏移量或一个间接定位到目标的句柄。")]),a._v(" "),s("li",[a._v("解析动作主要针对类或接口、字段、类方法、接口方法、方法类型等。对应常量池中的 CONSTANT_Class_info，CONSTANT_Fieldref_info、CONSTANT_Methodref_info 等。")])])])]),a._v(" "),s("h3",{attrs:{id:"初始化阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初始化阶段"}},[a._v("#")]),a._v(" 初始化阶段")]),a._v(" "),s("ul",[s("li",[s("mark",[a._v("初始化阶段就是执行类构造器方法<clinit>()的过程。")])]),a._v(" "),s("li",[a._v("此方法不需定义，是 javac 编译器自动收集类中的所有类变量的赋值动作和静态代码块中的语句合并而来。")]),a._v(" "),s("li",[a._v("构造器方法中指令按语句在源文件中出现的顺序执行。")]),a._v(" "),s("li",[s("mark",[a._v("<clinit>()不同于类的构造器。")]),a._v("（关联：构造器是虚拟机视角下的<init>()）")]),a._v(" "),s("li",[a._v("若该类具有父类，JVM 会保证子类的<clinit>()执行前，父类的<clinit>()已经执行完毕。")]),a._v(" "),s("li",[a._v("虚拟机必须保证一个类的<clinit>()方法在多线程下被同步加锁。")])]),a._v(" "),s("h2",{attrs:{id:"_2-3-类加载器分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-类加载器分类"}},[a._v("#")]),a._v(" 2.3. 类加载器分类")]),a._v(" "),s("p",[a._v("JVM 支持两种类型的类加载器 。分别为"),s("mark",[a._v("引导类加载器（Bootstrap ClassLoader）")]),a._v("和"),s("mark",[a._v("自定义类加载器（User-Defined ClassLoader）")]),a._v("。")]),a._v(" "),s("p",[a._v("从概念上来讲，自定义类加载器一般指的是程序中由开发人员自定义的一类类加载器，但是 Java 虚拟机规范却没有这么定义，而是将"),s("mark",[a._v("所有派生于抽象类 ClassLoader 的类加载器都划分为自定义类加载器")]),a._v("。")]),a._v(" "),s("p",[a._v("无论类加载器的类型如何划分，在程序中我们最常见的类加载器始终只有 3 个，如下所示：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/1e553c6d5254f827d2dfab537bea3ab9.png",alt:"image-20200705094149223"}})]),a._v(" "),s("p",[a._v("这里的四者之间的关系是包含关系。不是上层下层，也不是子父类的继承关系。")]),a._v(" "),s("h3",{attrs:{id:"_2-3-1-虚拟机自带的加载器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-1-虚拟机自带的加载器"}},[a._v("#")]),a._v(" 2.3.1. 虚拟机自带的加载器")]),a._v(" "),s("p",[s("strong",[a._v("启动类加载器（引导类加载器，Bootstrap ClassLoader）")])]),a._v(" "),s("ul",[s("li",[a._v("这个类加载使用 C/C++语言实现的，嵌套在 JVM 内部。")]),a._v(" "),s("li",[a._v("它用来加载 Java 的核心库（JAVA_HOME/jre/lib/rt.jar、resources.jar 或 sun.boot.class.path 路径下的内容），用于提供 JVM 自身需要的类")]),a._v(" "),s("li",[a._v("并不继承自 ava.lang.ClassLoader，没有父加载器。")]),a._v(" "),s("li",[a._v("加载扩展类和应用程序类加载器，并指定为他们的父类加载器。")]),a._v(" "),s("li",[a._v("出于安全考虑，Bootstrap 启动类加载器只加载包名为 java、javax、sun 等开头的类")])]),a._v(" "),s("p",[s("strong",[a._v("扩展类加载器（Extension ClassLoader）")])]),a._v(" "),s("ul",[s("li",[a._v("Java 语言编写，由 sun.misc.Launcher$ExtClassLoader 实现。")]),a._v(" "),s("li",[a._v("派生于 ClassLoader 类")]),a._v(" "),s("li",[a._v("父类加载器为启动类加载器")]),a._v(" "),s("li",[a._v("从 java.ext.dirs 系统属性所指定的目录中加载类库，或从 JDK 的安装目录的 jre/1ib/ext 子目录（扩展目录）下加载类库。如果用户创建的 JAR 放在此目录下，也会自动由扩展类加载器加载。")])]),a._v(" "),s("p",[s("strong",[a._v("应用程序类加载器（系统类加载器，AppClassLoader）")])]),a._v(" "),s("ul",[s("li",[a._v("java 语言编写，由 sun.misc.LaunchersAppClassLoader 实现")]),a._v(" "),s("li",[a._v("派生于 ClassLoader 类")]),a._v(" "),s("li",[a._v("父类加载器为扩展类加载器")]),a._v(" "),s("li",[a._v("它负责加载环境变量 classpath 或系统属性 java.class.path 指定路径下的类库")]),a._v(" "),s("li",[s("mark",[a._v("该类加载是程序中默认的类加载器")]),a._v("，一般来说，Java 应用的类都是由它来完成加载")]),a._v(" "),s("li",[a._v("通过 ClassLoader#getSystemclassLoader() 方法可以获取到该类加载器")])]),a._v(" "),s("h3",{attrs:{id:"_2-3-2-用户自定义类加载器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-2-用户自定义类加载器"}},[a._v("#")]),a._v(" 2.3.2. 用户自定义类加载器")]),a._v(" "),s("p",[a._v("在 Java 的日常应用程序开发中，类的加载几乎是由上述 3 种类加载器相互配合执行的，在必要时，我们还可以自定义类加载器，来定制类的加载方式。 为什么要自定义类加载器？")]),a._v(" "),s("ul",[s("li",[a._v("隔离加载类")]),a._v(" "),s("li",[a._v("修改类加载的方式")]),a._v(" "),s("li",[a._v("扩展加载源")]),a._v(" "),s("li",[a._v("防止源码泄漏")])]),a._v(" "),s("p",[a._v("用户自定义类加载器实现步骤：")]),a._v(" "),s("ol",[s("li",[a._v("开发人员可以通过继承抽象类 ava.lang.ClassLoader 类的方式，实现自己的类加载器，以满足一些特殊的需求")]),a._v(" "),s("li",[a._v("在 JDK1.2 之前，在自定义类加载器时，总会去继承 ClassLoader 类并重写 loadClass() 方法，从而实现自定义的类加载类，但是在 JDK1.2 之后已不再建议用户去覆盖 loadclass() 方法，而是建议把自定义的类加载逻辑写在 findClass()方法中")]),a._v(" "),s("li",[a._v("在编写自定义类加载器时，如果没有太过于复杂的需求，可以直接继承 URLClassLoader 类，这样就可以避免自己去编写 findClass() 方法及其获取字节码流的方式，使自定义类加载器编写更加简洁。")])]),a._v(" "),s("h2",{attrs:{id:"_2-4-classloader-的使用说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-classloader-的使用说明"}},[a._v("#")]),a._v(" 2.4. ClassLoader 的使用说明")]),a._v(" "),s("p",[a._v("ClassLoader 类是一个抽象类，其后所有的类加载器都继承自 ClassLoader（不包括启动类加载器）")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/876534b3c2f447d3fc33e6f1db218068.png",alt:"image-20200705103516138"}})]),a._v(" "),s("p",[a._v("sun.misc.Launcher 它是一个 java 虚拟机的入口应用")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/a22114b608dffe484041b591d486a7fd.png",alt:"image-20200705103636003"}})]),a._v(" "),s("p",[s("strong",[a._v("获取 ClassLoader 的途径")])]),a._v(" "),s("ul",[s("li",[s("p",[a._v("方式一：获取当前 ClassLoader")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v("clazz"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getClassLoader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])])]),a._v(" "),s("li",[s("p",[a._v("方式二：获取当前线程上下文的 ClassLoader")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Thread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("currentThread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getContextClassLoader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])])]),a._v(" "),s("li",[s("p",[a._v("方式三：获取系统的 ClassLoader")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ClassLoader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getSystemClassLoader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])])]),a._v(" "),s("li",[s("p",[a._v("方式四：获取调用者的 ClassLoader")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("DriverManager")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getCallerClassLoader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])])])]),a._v(" "),s("h2",{attrs:{id:"_2-5-双亲委派机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-双亲委派机制"}},[a._v("#")]),a._v(" 2.5. 双亲委派机制")]),a._v(" "),s("p",[a._v("Java 虚拟机对 class 文件采用的是"),s("mark",[a._v("按需加载")]),a._v("的方式，也就是说当需要使用该类时才会将它的 class 文件加载到内存生成 class 对象。而且加载某个类的 class 文件时，Java 虚拟机采用的是"),s("mark",[a._v("双亲委派模式")]),a._v("，即把请求交由父类处理，它是一种任务委派模式。")]),a._v(" "),s("p",[s("strong",[a._v("工作原理")])]),a._v(" "),s("ul",[s("li",[a._v("1）如果一个类加载器收到了类加载请求，它并不会自己先去加载，而是把这个请求委托给父类的加载器去执行；")]),a._v(" "),s("li",[a._v("2）如果父类加载器还存在其父类加载器，则进一步向上委托，依次递归，请求最终将到达顶层的启动类加载器；")]),a._v(" "),s("li",[a._v("3）如果父类加载器可以完成类加载任务，就成功返回，倘若父类加载器无法完成此加载任务，子加载器才会尝试自己去加载，这就是双亲委派模式。")])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/05fa27fcc38eeaaa5babff55a00882a3.png",alt:"image-20200705105151258"}})]),a._v(" "),s("p",[s("strong",[a._v("举例")])]),a._v(" "),s("p",[a._v("当我们加载 jdbc.jar 用于实现数据库连接的时候，首先我们需要知道的是 jdbc.jar 是基于 SPI 接口进行实现的，所以在加载的时候，会进行双亲委派，最终从根加载器中加载 SPI 核心类，然后在加载 SPI 接口类，接着在进行反向委派，通过线程上下文类加载器进行实现类 jdbc.jar 的加载。")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/bed320014f52bb27c8f3d795b3dc3b4a.png",alt:"image-20200705105810107"}})]),a._v(" "),s("p",[s("strong",[a._v("优势")])]),a._v(" "),s("ul",[s("li",[a._v("避免类的重复加载")]),a._v(" "),s("li",[a._v("保护程序安全，防止核心 API 被随意篡改\n"),s("ul",[s("li",[a._v("自定义类：java.lang.String")]),a._v(" "),s("li",[a._v("自定义类：java.lang.ShkStart（报错：阻止创建 java.lang 开头的类）")])])])]),a._v(" "),s("p",[s("strong",[a._v("沙箱安全机制")])]),a._v(" "),s("p",[a._v("自定义 String 类，但是在加载自定义 String 类的时候会率先使用引导类加载器加载，而引导类加载器在加载的过程中会先加载 jdk 自带的文件（rt.jar 包中 java\\lang\\String.class），报错信息说没有 main 方法，就是因为加载的是 rt.jar 包中的 string 类。这样可以保证对 java 核心源代码的保护，这就是沙箱安全机制。")]),a._v(" "),s("h2",{attrs:{id:"_2-6-其他"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-其他"}},[a._v("#")]),a._v(" 2.6. 其他")]),a._v(" "),s("p",[s("strong",[a._v("如何判断两个 class 对象是否相同")])]),a._v(" "),s("p",[a._v("在 JVM 中表示两个 class 对象是否为同一个类存在两个必要条件：")]),a._v(" "),s("ul",[s("li",[a._v("类的完整类名必须一致，包括包名。")]),a._v(" "),s("li",[a._v("加载这个类的 ClassLoader（指 ClassLoader 实例对象）必须相同。")])]),a._v(" "),s("p",[a._v("换句话说，在 JVM 中，即使这两个类对象（class 对象）来源同一个 Class 文件，被同一个虚拟机所加载，但只要加载它们的 ClassLoader 实例对象不同，那么这两个类对象也是不相等的。")]),a._v(" "),s("p",[s("strong",[a._v("对类加载器的引用")])]),a._v(" "),s("p",[a._v("JVM 必须知道一个类型是由启动加载器加载的还是由用户类加载器加载的。如果一个类型是由用户类加载器加载的，那么 JVM 会"),s("mark",[a._v("将这个类加载器的一个引用作为类型信息的一部分保存在方法区中")]),a._v("。当解析一个类型到另一个类型的引用的时候，JVM 需要保证这两个类型的类加载器是相同的。")]),a._v(" "),s("p",[s("strong",[a._v("类的主动使用和被动使用")])]),a._v(" "),s("p",[a._v("Java 程序对类的使用方式分为：主动使用和被动使用。")]),a._v(" "),s("p",[a._v("主动使用，又分为七种情况：")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("创建类的实例")])]),a._v(" "),s("li",[s("p",[a._v("访问某个类或接口的静态变量，或者对该静态变量赋值")])]),a._v(" "),s("li",[s("p",[a._v("调用类的静态方法")])]),a._v(" "),s("li",[s("p",[a._v('反射（比如：Class.forName（"com.atguigu.Test"））')])]),a._v(" "),s("li",[s("p",[a._v("初始化一个类的子类")])]),a._v(" "),s("li",[s("p",[a._v("Java 虚拟机启动时被标明为启动类的类")])]),a._v(" "),s("li",[s("p",[a._v("JDK 7 开始提供的动态语言支持：")]),a._v(" "),s("p",[a._v("java.lang.invoke.MethodHandle 实例的解析结果")]),a._v(" "),s("p",[a._v("REF_getStatic、REF_putStatic、REF_invokeStatic 句柄对应的类没有初始化，则初始化")])])]),a._v(" "),s("p",[a._v("除了以上七种情况，其他使用 Java 类的方式都被看作是对"),s("mark",[a._v("类的被动使用")]),a._v("，都"),s("mark",[a._v("不会导致类的初始化")]),a._v("。")])])}),[],!1,null,null,null);s.default=_.exports}}]);