---
title: TypeScript进阶之装饰器
date: 2023-08-01 21:18:56
permalink: /pages/93d8d0/
sidebar: auto
categories:
  - 随笔
tags:
  - 
author: 
  name: GeorgeH
  link: https://github.com/GeorgeHcc
---





## 装饰器
什么是装饰器呢？在这之前有必要先聊一下设计模式中的装饰器模式.


:::details
> 装饰器模式是一种<mark>结构型</mark>设计模式，它允许在运行时动态地向对象添加行为，而无需修改对象本身。该模式通过将
> 对象包装在一个装饰器对象中，从而在不改变对象接口的情况下，为对象添加新的行为或修改现有行为。 
装饰器模式的核心思想是将对象的行为划分为核心功能和可选功能，并通过装饰器对象来动态地添加可选功能。装饰器对象通常实现与核心对象相同的接口，并将核心对象作为其构造函数的参数。当需要添加新的行为时，可以简单地创建一个新的装饰器对象，并将其包装在原始对象周围，从而创建一个新的对象，该对象具有新的行为。 

装饰器模式的优点包括： 
- 可以在运行时动态地添加新的行为，而无需修改现有的代码。 
- 可以将不同的装饰器组合在一起，从而创建具有复杂行为的对象。 
- 可以避免使用继承来扩展对象行为，从而减少代码复杂性和耦合度。 
  
装饰器模式的缺点包括： 
- 可能会导致过多的对象包装，从而增加系统的复杂性和内存开销。 
- 可能会使代码变得难以理解和维护，特别是当装饰器对象的数量增加时。 
:::

了解完装饰器后，我们来看看在ts中如何去使用装饰器：
首先我们使用`tsc --init`生成tsconfig.json文件，然后找到以下两行打开注释方可使用ts装饰器
![](https://cdn.jsdelivr.net/gh/GeorgeHcc/GeorgeHcc@main/assets/blog/Snipaste_2023-08-01_21-17-09.png)

## 1.类装饰器

``` typescript
const Base: ClassDecorator = (target) => {
    console.log(target);//[class Animal]
    target.prototype.name='George'
    target.prototype.getName=function(){
        console.log(this.name);
    }
};

@Base
class Animal {
 
}

const  sheep=new Animal() as any

sheep.getName()//George
```

## 2.属性装饰器


## 3.参数装饰器


## 4.方法装饰器


## 5.装饰器工厂